import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from 'stores/index'

// instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
