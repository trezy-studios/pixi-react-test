// Local imports
import { Bullets } from '@/components/Bullets.tsx'
import { Player } from '@/components/Player.tsx'
import { RedSquare } from '@/components/RedSquare.tsx'





export function Renderer() {
	return (
		<container>
			<Player />
			<Bullets />
			<RedSquare />
		</container>
	)
}
