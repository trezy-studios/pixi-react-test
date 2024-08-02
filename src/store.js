// Module imports
import { makeStore } from 'statery'





/**
 * @typedef {object} Entity
 * @property {number} positionX
 * @property {number} positionY
 */

/**
 * @typedef {object} KeyboardKeyState
 * @property {number} activatedAt
 * @property {number} deactivatedAt
 * @property {boolean} isActive
 * @property {number} sinceLastActivated
 */

export const store = makeStore({
  /** @type {Set<Entity>} */
  entities: new Set,

  /** @type {Map<string, KeyboardKeyState>} */
  keyboardState: new Map,

	now: 0,

	playerDirectionX: 0,
	playerDirectionY: 0,
	playerPositionX: 0,
	playerPositionY: 0,
	playerSpeedModifier: 2,
})
