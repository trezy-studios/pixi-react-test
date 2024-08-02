// Module imports
import {
	useCallback,
	useState,
} from 'react';
import { useTick } from '@pixi/react';





// Local imports
import { store } from '@/store.ts';





export function useStateTestSystem() {
	const [count, setCount] = useState(0)

	const updateCount = useCallback(() => {
		setCount(previousState => previousState + 1)
	}, [])

	useTick(updateCount)
}
