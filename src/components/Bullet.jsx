import * as React from 'react'
import { useAsset } from '@pixi/react';

export function Bullet(props) {
	const { entity } = props

	const bunnyTexture = useAsset('https://pixijs.com/assets/bunny.png')

	return (
		<sprite
			scale={0.5}
			texture={bunnyTexture}
			x={entity.positionX}
			y={entity.positionY} />
	)
}
