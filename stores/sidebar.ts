import { atom } from 'hooks/state/index'
import { v1 } from 'uuid'

export const menuState = atom<boolean>({
  key: `menuOpenState/${v1()}`,
  default: typeof window !== 'undefined' && window.innerWidth > 768,
})
