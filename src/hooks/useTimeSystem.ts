// Module imports
import {
	useApplication,
	useTick,
} from '@pixi/react';
import { useCallback } from 'react';





// Local imports
import { store } from '@/store.ts';





export function useTimeSystem() {
	useTick(() => {
		store.set(() => ({
			now: performance.now(),
		}))
	})
}
