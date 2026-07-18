import { type Study } from './types'
import { ageOfEmbodiment } from './age-of-embodiment'
import { convexPlanet } from './convex-planet'
import { oceanDynamics } from './ocean-dynamics'
import { cryosphereScaffold } from './cryosphere-scaffold'
import { restorationRobotics } from './restoration-robotics'
import { speciesRecovery } from './species-recovery'
import { permafrostCarbon } from './permafrost-carbon'
import { operationalBlueprint } from './operational-blueprint'
import { localModelLab } from './local-model-lab'
import { zenGardener } from './zen-gardener'

export * from './types'

/** All studies, newest first. */
export const studies: Study[] = [
  zenGardener,
  convexPlanet,
  localModelLab,
  permafrostCarbon,
  cryosphereScaffold,
  restorationRobotics,
  speciesRecovery,
  operationalBlueprint,
  oceanDynamics,
  ageOfEmbodiment,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function getStudy(slug: string): Study | undefined {
  return studies.find((s) => s.slug === slug)
}

export function studySlugs(): string[] {
  return studies.map((s) => s.slug)
}

/** The lead whitepaper for hero placement. */
export const featuredStudy: Study = studies.find((s) => s.featured) ?? studies[0]
