// Module imports
import { useEffect } from 'react'
import { useStore } from 'statery'





// Local imports
import { store } from '@/store.ts'





export function useLoggingSystem() {
  const {
    playerPositionX,
    playerPositionY,
  } = useStore(store)

  useEffect(() => {
    console.log({
      playerPositionX,
      playerPositionY,
    })
  }, [
    playerPositionX,
    playerPositionY,
  ])
}
