import { type Study } from './types'

export const localModelLab: Study = {
  slug: 'local-model-lab',
  title: 'The Always-On Lab: Running Local Models 24/7',
  subtitle:
    'An operational specification for a continuous, self-directed research node on commodity hardware.',
  tag: 'Lab Note',
  date: '2026-07-17',
  authors: ['EcoSurge Autonomous Systems Division'],
  abstract:
    'EcoSurge’s research velocity is bounded by how many hypotheses we can generate, screen, and discard per day. This lab note specifies a 24/7 local-inference node built on a single RTX 4070 Ti (12 GB), a Ryzen 7 7700X, and 15 GB of system RAM under WSL2 — enough to run a quantized 14-billion-parameter model continuously as an autonomous literature-triage, hypothesis-generation, and data-labeling engine. We give the VRAM budget, model-selection criteria, the throughput arithmetic, and the operating procedures that keep it running unattended and safely.',
  keywords: ['local inference', 'llm', 'quantization', 'ops', 'automation', 'RTX 4070 Ti'],
  blocks: [
    {
      type: 'lead',
      text: 'A model that runs only when a human is watching is a tool. A model that runs continuously, screening the literature and proposing experiments while the lab sleeps, is an *instrument*. This is how we build the second kind on hardware you already own.',
    },
    {
      type: 'heading',
      text: 'The node',
    },
    {
      type: 'stats',
      items: [
        { value: '12 GB', label: 'VRAM — RTX 4070 Ti (Ada, ~40 TFLOP FP16)' },
        { value: '16', label: 'CPU threads — Ryzen 7 7700X' },
        { value: '15 GB', label: 'system RAM (WSL2), 4 GB swap' },
        { value: '24/7', label: 'target duty cycle' },
      ],
    },
    {
      type: 'paragraph',
      text: 'The binding constraint is not compute; it is the 12 GB of VRAM. Everything downstream — model size, context length, batch size — is an allocation problem against that fixed budget. Solve the allocation and the node runs indefinitely.',
    },
    {
      type: 'heading',
      text: 'The VRAM budget',
    },
    {
      type: 'paragraph',
      text: 'A dense transformer’s resident footprint is dominated by two terms: the quantized weights and the key/value attention cache. The weights scale with parameter count *P* and bits-per-weight *b*; the KV cache scales with context length, layers, and hidden size.',
    },
    {
      type: 'equation',
      display: 'V ≈ P · b/8  +  2 · n_layer · d_model · L · b_kv/8  +  V_overhead',
      where: [
        '**P** — parameter count (e.g. 14 × 10⁹)',
        '**b** — bits per weight after quantization (≈ 4.8 for Q4_K_M)',
        '**L** — context length in tokens; **b_kv** — KV cache precision (8-bit)',
        '**V_overhead** — CUDA context + activations (≈ 0.9 GB)',
      ],
      note: 'For a 14B model at Q4_K_M with a 16k-token context, V lands near 11 GB — a deliberate ~1 GB of headroom below the 12 GB ceiling so the display server and transient spikes never trigger an out-of-memory kill.',
    },
    {
      type: 'figure',
      viz: 'vram-budget',
      caption:
        'Steady-state VRAM allocation for a 14B Q4_K_M model at 16k context. Headroom is a feature, not waste.',
    },
    {
      type: 'heading',
      text: 'Model selection',
    },
    {
      type: 'paragraph',
      text: 'The sweet spot for a 12 GB card running continuously is a **14B-class instruction model at 4–5 bit quantization**, or a **7–9B model at higher precision** when latency matters more than depth. Larger 30B+ models can be run partially offloaded to system RAM, but the CPU-resident layers throttle throughput below the rate needed for a useful overnight batch.',
    },
    {
      type: 'table',
      columns: ['Tier', 'Model class', 'Quant', 'Resident VRAM', 'Role'],
      rows: [
        ['A', '14B instruct', 'Q4_K_M', '~11.0 GB', 'Primary reasoning & synthesis'],
        ['B', '7–9B instruct', 'Q6_K', '~8.5 GB', 'High-throughput triage & labeling'],
        ['C', '3–4B', 'Q8_0', '~5 GB', 'Embeddings, routing, classification'],
        ['D', '30B+ MoE', 'Q4 + offload', '12 GB + RAM', 'Deep overnight passes (slow)'],
      ],
      caption: 'Rotate tiers by task. Tier B is the workhorse for 24/7 duty; Tier A is reserved for synthesis.',
    },
    {
      type: 'heading',
      text: 'Throughput arithmetic',
    },
    {
      type: 'paragraph',
      text: 'Autoregressive decoding is memory-bandwidth bound: each token requires streaming the full set of weights from VRAM. The ceiling on tokens per second is therefore memory bandwidth divided by model bytes.',
    },
    {
      type: 'equation',
      display: 'throughput ≈ BW / (P · b/8) ≈ 504 GB/s / 8.4 GB ≈ 55–65 tok/s',
      where: [
        '**BW** — RTX 4070 Ti memory bandwidth (~504 GB·s⁻¹)',
        '**P · b/8** — resident weight bytes (~8.4 GB for 14B Q4_K_M)',
      ],
      note: 'At ~60 tok/s, a single node produces on the order of 5 million tokens per day of sustained generation — enough to triage a day’s worth of new preprints, draft experiment cards, and label a screening dataset before morning.',
    },
    {
      type: 'heading',
      text: 'Operating procedure — the always-on loop',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Serve',
          text: 'Run the model behind a persistent OpenAI-compatible server (`llama.cpp` server or Ollama) launched under a process supervisor so it survives crashes and reboots. Pin it to the GPU; cap context to the budgeted length.',
        },
        {
          title: 'Queue',
          text: 'A lightweight job queue feeds the server: new-literature triage, hypothesis generation against the Species Archive, data labeling, and self-critique passes. Jobs are idempotent and checkpointed so an interruption never corrupts a batch.',
        },
        {
          title: 'Guardrail',
          text: 'Every generation is schema-validated before it touches a datastore. The node has read-broadly / write-narrowly permissions: it may propose, but human review gates anything that mutates canonical data or spends money.',
        },
        {
          title: 'Watch',
          text: 'A watchdog polls GPU temperature, VRAM, and tokens/sec. On thermal or memory pressure it sheds to a smaller tier (A→B→C) rather than dying. Metrics stream to a dashboard; anomalies page a human.',
        },
        {
          title: 'Compound',
          text: 'Outputs the human accepts become few-shot exemplars and fine-tuning data for the next model generation — the loop learns from what survives review.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Thermal & duty-cycle note',
      text: 'Continuous inference holds the GPU at 60–75% utilization, well inside the Ada thermal envelope with a modest undervolt. Cap power to ~250 W and the node runs quiet, cool, and stable for months — the limiting maintenance item is dust, not silicon.',
    },
    {
      type: 'paragraph',
      text: 'One commodity workstation, run this way, is a tireless junior researcher: it never tires of reading, never forgets to log, and every morning hands the lab a ranked stack of things worth a human’s attention. Multiply it across nodes and the research frontier moves at the speed of electricity, not calendars.',
    },
    {
      type: 'quote',
      text: 'The cheapest way to accelerate discovery is to stop letting the instruments sleep.',
      attribution: 'EcoSurge Autonomous Systems Division',
    },
  ],
}
