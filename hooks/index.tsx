import { useState } from 'react';
import { useMount } from 'react-use';

export { useClickAway, useInterval, usePrevious, useMount, useUnmount } from 'react-use';
export { useState, useEffect, useLayoutEffect, useCallback, useContext, useMemo, useReducer, useRef } from 'react';

export { useAppDispatch } from './useAppDispatch';
export { useAppSelector } from './useAppSelector';
export { useFormInput } from './useFormInput';
export { useI18n } from './useI18n';
export { useIntersectionObserver } from './useIntersectionObserver';
export { useOnClickOutside } from './useOnClickOutside';
export { useUserLikes } from './useUserLikes';

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useMount(() => setMounted(true));
  return mounted;
}
