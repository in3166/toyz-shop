import { atom } from 'hooks/state/index'

export const menuState = atom<boolean>({
  key: 'menuOpenState',
  default: true,
  //  window ? window.innerWidth > 768 :
})
