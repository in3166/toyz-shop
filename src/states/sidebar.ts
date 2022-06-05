import { atom } from 'hooks/state/index'

export const menuState = atom<boolean>({
  key: 'menuOpenState',
  default: window.innerWidth > 768,
})
