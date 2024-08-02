// Local imports
import { Renderer } from '@/components/Renderer.tsx'
import { useControlsSystem } from '@/hooks/useControlsSystem.ts'
import { useKeyboardStateSystem } from '@/hooks/useKeyboardStateSystem.ts'
// import { useLoggingSystem } from '@/hooks/useLoggingSystem.ts'
import { useMovementSystem } from '@/hooks/useMovementSystem.ts'
import { useTimeSystem } from '@/hooks/useTimeSystem.ts'
import { useStateTestSystem } from '@/hooks/useStateTestSystem.ts'





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
