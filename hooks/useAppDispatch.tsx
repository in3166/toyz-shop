import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'stores/index'

// instead of plain `useDispatch`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
