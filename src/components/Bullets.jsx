// Module imports
import * as React from 'react'
import { useStore } from 'statery'





// Local imports
import { Bullet } from '@/components/Bullet.jsx'
import { store } from '@/store.js'





export function Bullets() {
	const { entities } = useStore(store)

	const bullets = []

	let index = 0

	for (const entity of entities) {
		bullets.push(
			<Bullet
				key={index}
				entity={entity} />
		)
		index += 1
	}

	return bullets
}
