# EcoSurge Always-On Lab — 24/7 Local Model Runbook

Operational specification for running a local LLM continuously as an autonomous
research node. Tuned to the current workstation, but the budget math generalizes
to any single-GPU box.

> Companion study: `/blog/local-model-lab` (rendered on the site).

## 1. Target hardware (this node)

| Component | Spec | Implication |
|-----------|------|-------------|
| GPU | NVIDIA RTX 4070 Ti, **12 GB** GDDR6X, ~504 GB/s | Binding constraint. Sizes model + context. |
| CPU | AMD Ryzen 7 7700X, 8C / 16T | CPU offload + orchestration headroom. |
| RAM | 15 GiB (WSL2), 4 GiB swap | Enough for a partial offload of a 30B model. |
| Disk | ~942 GB free | Room for a model zoo + datasets. |
| OS | WSL2 (Linux 6.6), Windows host | Use WSL CUDA passthrough. |

## 2. VRAM budget (12 GB ceiling)

```
V ≈ P·b/8  +  2·n_layer·d_model·L·b_kv/8  +  V_overhead
```

Steady-state target for a 14B model at Q4_K_M, 16k context:

| Segment | Size |
|---------|------|
| Weights (Q4_K_M, ~4.8 bpw) | ~8.2 GB |
| KV cache (16k ctx, 8-bit) | ~1.9 GB |
| CUDA context + activations | ~0.9 GB |
| **Headroom (leave free)** | **~1.0 GB** |

Never plan to 100% of VRAM — the ~1 GB headroom absorbs transient spikes and the
Windows display allocation so the process is not OOM-killed overnight.

## 3. Model tiers (rotate by task)

| Tier | Class | Quant | VRAM | Role |
|------|-------|-------|------|------|
| A | 14B instruct | Q4_K_M | ~11.0 GB | Reasoning & synthesis |
| B | 7–9B instruct | Q6_K | ~8.5 GB | High-throughput triage / labeling |
| C | 3–4B | Q8_0 | ~5 GB | Embeddings, routing, classification |
| D | 30B+ MoE | Q4 + RAM offload | 12 GB + RAM | Slow deep overnight passes |

Throughput ceiling (memory-bandwidth bound):
`tok/s ≈ BW / weight_bytes ≈ 504 / 8.4 ≈ 55–65 tok/s` → ~5M tokens/day sustained.

## 4. Stand up the server

Recommended: `llama.cpp` server or Ollama, behind a process supervisor so it
survives crashes and reboots.

```bash
# Verify CUDA is visible inside WSL2
nvidia-smi

# Option A — Ollama (simplest)
curl -fsSL https://ollama.com/install.sh | sh
OLLAMA_KEEP_ALIVE=-1 ollama serve            # keep model resident indefinitely
ollama run <14b-instruct-q4_K_M>             # pull + warm

# Option B — llama.cpp server (max control over ctx + KV cache dtype)
./llama-server \
  --model ./models/<model>.Q4_K_M.gguf \
  --n-gpu-layers 999 \                        # all layers on GPU
  --ctx-size 16384 \
  --cache-type-k q8_0 --cache-type-v q8_0 \   # 8-bit KV cache
  --parallel 2 --cont-batching \
  --host 127.0.0.1 --port 8080
```

Cap GPU power for a quiet, cool 24/7 duty cycle (run on the Windows host):

```powershell
nvidia-smi -pl 250        # ~250 W cap; add a small undervolt via MSI Afterburner
```

## 5. Supervise it (survives reboot)

```ini
# /etc/systemd/system/ecosurge-lab.service   (systemd inside WSL2, or use pm2/tmux)
[Unit]
Description=EcoSurge Always-On Lab inference server
After=network.target

[Service]
ExecStart=/usr/local/bin/ollama serve
Environment=OLLAMA_KEEP_ALIVE=-1
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
```

## 6. The always-on loop

1. **Serve** — persistent OpenAI-compatible endpoint, model pinned to GPU.
2. **Queue** — idempotent, checkpointed jobs: literature triage, hypothesis
   generation against the Species Archive, data labeling, self-critique.
3. **Guardrail** — every generation is schema-validated before it touches a
   datastore. Read-broadly / write-narrowly: the node proposes; a human review
   gate approves anything that mutates canonical data or spends money.
4. **Watch** — a watchdog polls temp / VRAM / tok/s and sheds tier A→B→C under
   pressure instead of dying. Metrics to a dashboard; anomalies page a human.
5. **Compound** — accepted outputs become few-shot exemplars and fine-tune data
   for the next generation.

## 7. Watchdog one-liner

```bash
# Log GPU health every 30s; alert if VRAM > 11.5 GB or temp > 83 C
while true; do
  nvidia-smi --query-gpu=timestamp,memory.used,temperature.gpu,utilization.gpu \
    --format=csv,noheader >> ~/lab/gpu.log
  sleep 30
done
```

## 8. Safety envelope

- **Never** grant the autonomous loop write access to production data, secrets,
  or payment rails. Propose-only.
- Keep prompts + outputs logged and auditable.
- Rate-limit external calls; the node reads broadly but acts narrowly.
- Thermals are the main maintenance item — cap power, undervolt, and clean dust.
