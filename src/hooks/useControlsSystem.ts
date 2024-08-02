// Module imports
import { useMemo } from 'react'
import { useTick } from '@pixi/react'





// Local imports
import { ACTION_HANDLERS } from '@/constants/ACTION_HANDLERS.ts'
import { keyBindings } from '@/helpers/keyBindings.ts'
import { store } from '@/store.ts'





export function useControlsSystem() {
  const boundKeys = useMemo(() => Object.keys(keyBindings), [])

	useTick(() => {
		const {
			keyboardState,
			now,
		} = store.state

		for (const key of boundKeys) {
			if (keyboardState.has(key)) {
				const keyState = keyboardState.get(key)!
        const actionName = keyBindings[key]
        const action = ACTION_HANDLERS[actionName]

        if (keyState.isActive) {
					if ((keyState.sinceLastActivated === null) || (action.isRepeatable && keyState.sinceLastActivated < action.repeatFrequency!)) {
						keyState.sinceLastActivated = now
          	action?.onActivate?.()
					}
        } else {
					if (typeof keyState.sinceLastActivated === 'number') {
						keyState.sinceLastActivated = null
          	action?.onDeactivate?.()
					}
        }
      }
    }
	})
}
