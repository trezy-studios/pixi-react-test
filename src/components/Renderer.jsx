// Local imports
import { Bullets } from '@/components/Bullets.jsx'
import { Player } from '@/components/Player.jsx'
import { RedSquare } from '@/components/RedSquare.jsx'





export function Renderer() {
	return (
		<container>
			<Player />
			<Bullets />
			<RedSquare />
		</container>
	)
}
