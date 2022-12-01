import { atom } from 'hooks/state/index'

export const menuState = atom<boolean>({
  key: 'menuOpenState2',
  default: typeof window !== 'undefined' && window.innerWidth > 768,
})
