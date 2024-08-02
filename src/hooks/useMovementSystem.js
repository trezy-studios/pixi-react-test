// Module imports
import { useTick } from '@pixi/react'





// Local imports
import { store } from '@/store.js'





export function useMovementSystem() {
	useTick(ticker => {
    const { deltaTime } = ticker

    store.set(previousState => {
      const {
        playerPositionX,
        playerPositionY,
        playerSpeedModifier,
        playerDirectionX,
        playerDirectionY,
      } = previousState

      return {
        playerPositionX: playerPositionX + ((playerDirectionX * deltaTime) * playerSpeedModifier),
        playerPositionY: playerPositionY + ((playerDirectionY * deltaTime) * playerSpeedModifier),
      }
    })
  })
}
