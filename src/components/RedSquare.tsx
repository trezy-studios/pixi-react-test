// Module imports
import type { Graphics } from 'pixi.js'
import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'





export function RedSquare() {
	/** @type {import('react').RefObject<import('pixi.js').Container>} */
	const containerRef = useRef(null)

	/** @type {import('react').RefObject<import('pixi.js').Graphics>} */
	const graphicsRef = useRef(null)

	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	})

	const draw = useCallback<(graphics: Graphics) => void>(
		graphics => {
			graphics.clear()
			graphics.setFillStyle({ color: 'red' })
			graphics.rect(0, 0, 100, 100)
			graphics.fill()
		},
		[position],
	)

	useEffect(() => {
		let stopAnimation = false

		const loop = () => {
			if (stopAnimation) {
				return
			}

			setPosition({
				x: Math.sin(performance.now() / 100) * 10,
				y: Math.cos(performance.now() / 100) * 10,
			})

			requestAnimationFrame(loop)
		}

		loop()

		return () => {
			stopAnimation = true
		}
	}, [])

	return (
		<container
			ref={containerRef}
			x={100}>
			<graphics
				ref={graphicsRef}
				draw={draw}
				eventMode={'static'}
				onClick={event => { console.log({event}) }}
				x={position.x + 100}
				y={position.y + 100} />
		</container>
	)
}
