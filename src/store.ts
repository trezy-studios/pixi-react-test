// Module imports
import { makeStore } from 'statery'





export const store = makeStore({
  /** @type {Set<Entity>} */
  entities: new Set as Set<{
 		positionX: number,
		positionY: number,
	}>,

  keyboardState: new Map as Map<string, {
 		activatedAt: number | null,
		deactivatedAt: number | null,
		isActive: boolean,
		repeatFrequency?: number,
		sinceLastActivated: number | null,
	}>,

	now: 0,

	playerDirectionX: 0,
	playerDirectionY: 0,
	playerPositionX: 0,
	playerPositionY: 0,
	playerSpeedModifier: 2,
})
