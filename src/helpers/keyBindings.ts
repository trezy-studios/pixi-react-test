// Local imports
import { ACTION_NAMES } from '@/constants/ACTION_NAMES.ts'





export const keyBindings: Record<string, string> = {
  ' ': ACTION_NAMES.FIRE,
  'a': ACTION_NAMES.MOVE_WEST,
  'd': ACTION_NAMES.MOVE_EAST,
  's': ACTION_NAMES.MOVE_SOUTH,
  'w': ACTION_NAMES.MOVE_NORTH,
}
