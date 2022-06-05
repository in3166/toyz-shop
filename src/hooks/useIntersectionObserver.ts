import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react'
import { getProudcts } from 'services/products'
import { setProductList } from 'states/product'
import { useAppDispatch } from './useAppDispatch'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: Args,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>
) {
  const dispatch = useAppDispatch()
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null)

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entries]) => {
      if (entries.isIntersecting) {
        setIsLoading(true)

        const pageNumber = currentPage + 1
        setCurrentPage(pageNumber)

        setTimeout(() => {
          getProudcts(pageNumber)
            .then((res) => {
              dispatch(setProductList(res.data))
            })
            .finally(() => {
              setIsLoading(false)
            })
        }, 900)
      }
    },
    [currentPage, dispatch, setCurrentPage, setIsLoading]
  )

  useEffect(() => {
    if (!target) return undefined

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold })
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [elementRef, root, rootMargin, threshold, onIntersect, target])

  return setTarget
}
