'use client'

// Module imports
import {
	Application,
	extend,
} from '@pixi/react'
import {
	AlphaFilter,
	BlurFilter,
	Container,
	Graphics,
	Sprite,
	Text,
	Texture,
} from 'pixi.js'
import {
	Suspense,
	useLayoutEffect,
	useRef,
} from 'react'





// Local imports
import { Game } from '@/components/Game.tsx'
import { store } from '@/store.ts'





extend({
	AlphaFilter,
	BlurFilter,
	Container,
	Graphics,
	Sprite,
	Text,
	Texture,
})





export default function Home() {
	const applicationRef = useRef(null)
	const resizeToRef = useRef(null)

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			// @ts-ignore
			window.store = store
		}
	}, [])

	return (
		<div
			ref={resizeToRef}
			style={{
				height: '100vh',
				width: '100%',
			}}>
			<Application
				attachToDevTools
				defaultTextStyle={{
					fill: 'blue',
				}}
				ref={applicationRef}
				resizeTo={resizeToRef}>
				<Suspense fallback={<pixiText text={'Loading...'} />}>
					<Game />
				</Suspense>
			</Application>
		</div>
	);
}
