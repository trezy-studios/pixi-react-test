// Local imports
import { Renderer } from '@/components/Renderer.jsx'
import { useControlsSystem } from '@/hooks/useControlsSystem.js'
import { useKeyboardStateSystem } from '@/hooks/useKeyboardStateSystem.js'
// import { useLoggingSystem } from '@/hooks/useLoggingSystem.js'
import { useMovementSystem } from '@/hooks/useMovementSystem.js'
import { useTimeSystem } from '@/hooks/useTimeSystem.js'
import { useStateTestSystem } from '@/hooks/useStateTestSystem.js'





export function Game() {
	useStateTestSystem()
	useTimeSystem()
	useKeyboardStateSystem()
	useControlsSystem()
	useMovementSystem()
	// useLoggingSystem()

	return (
		<Renderer />
	)
}
