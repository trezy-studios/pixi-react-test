// Local imports
import { ACTION_NAMES } from '@/constants/ACTION_NAMES.ts'
import { store } from '@/store.ts'





export const ACTION_HANDLERS: {
  [key: string]: {
    isRepeatable: boolean,
    onActivate: (...args: any) => any
    onDeactivate?: (...args: any) => any
    repeatFrequency?: number,
  }
} = {
  [ACTION_NAMES.MOVE_EAST]: {
    isRepeatable: false,
    onActivate() {
      store.set(previousState => ({
        playerDirectionX: previousState.playerDirectionX + 1,
      }))
    },
    onDeactivate() {
      store.set(previousState => ({
        playerDirectionX: previousState.playerDirectionX - 1,
      }))
    },
  },

  [ACTION_NAMES.FIRE]: {
    isRepeatable: false,
    onActivate() {
      store.set(previousState => {
				const { entities } = previousState

        const bullet = {
          positionX: previousState.playerPositionX,
          positionY: previousState.playerPositionY,
        }

				entities.add(bullet)

        return {
          entities: new Set(entities),
        }
      })
    },
  },

  [ACTION_NAMES.MOVE_NORTH]: {
    isRepeatable: false,
    onActivate() {
      store.set(previousState => ({
        playerDirectionY: previousState.playerDirectionY - 1,
      }))
    },
    onDeactivate() {
      store.set(previousState => ({
        playerDirectionY: previousState.playerDirectionY + 1,
      }))
    },
  },

  [ACTION_NAMES.MOVE_SOUTH]: {
    isRepeatable: false,
    onActivate() {
      store.set(previousState => ({
        playerDirectionY: previousState.playerDirectionY + 1,
      }))
    },
    onDeactivate() {
      store.set(previousState => ({
        playerDirectionY: previousState.playerDirectionY - 1,
      }))
    },
  },

  [ACTION_NAMES.MOVE_WEST]: {
    isRepeatable: false,
    onActivate() {
      store.set(previousState => ({
        playerDirectionX: previousState.playerDirectionX - 1,
      }))
    },
    onDeactivate() {
      store.set(previousState => ({
        playerDirectionX: previousState.playerDirectionX + 1,
      }))
    },
  },
}
