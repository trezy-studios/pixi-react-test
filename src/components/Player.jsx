// Module imports
import {
	useAssets,
	useTick,
} from '@pixi/react'
import { useCallback, useState } from 'react'
import { useStore } from 'statery'





// Local imports
import { store } from '@/store.js'





// Constants
const assetPaths = ['https://pixijs.com/assets/bunny.png']

export function Player() {
	const {
		playerPositionX,
		playerPositionY,
	} = useStore(store)

	const [alpha, setAlpha] = useState(1)

	const {
		assets: [texture],
		isError,
		isPending,
		isSuccess,
	} = useAssets(assetPaths)

	const handleTick = useCallback(() => {
		setAlpha((Math.sin(performance.now() / 300) / 4) + 0.75)
	}, [])

	useTick(handleTick)

	return (
		<container
			x={playerPositionX}
			y={playerPositionY}>
			{isPending && (
				<pixiText text={'Loading player sprite...'} />
			)}

			{isError && (
				<pixiText text={'Failed to load player sprite, please see the console.'} />
			)}

			{isSuccess && (
				<sprite
					y={25}>
					<alphaFilter alpha={alpha} />
					{/* <blurFilter strength={10} /> */}
				</sprite>
			)}

			{/* <sprite texture={texture} /> */}
			<pixiText text={'Player'} />
		</container>
	)
}
