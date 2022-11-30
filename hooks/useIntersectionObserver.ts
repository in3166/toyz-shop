import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react'
import { getProudcts } from 'services/products'
import { useRecoil } from './state'
import { currentPageState } from 'states/page'
import { setProductList } from 'states/product'
import { useAppDispatch } from './useAppDispatch'
import { useErrorHandler } from 'react-error-boundary'
import { IProductItem } from 'types/product'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0 }: Args,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setproductsList: Dispatch<SetStateAction<IProductItem[]>>
) {
  const dispatch = useAppDispatch()
  const handleError = useErrorHandler()
  const [currentPage, setCurrentPage] = useRecoil(currentPageState)
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
              console.log(res.data)
              dispatch(setProductList(res.data))
              setproductsList((prev) => [...prev, ...res.data])
            })
            .catch((err) => {
              handleError(err)
            })
            .finally(() => {
              setIsLoading(false)
            })
        }, 900)
      }
    },
    [currentPage, dispatch, handleError, setCurrentPage, setIsLoading]
  )

  useEffect(() => {
    if (!target) return undefined

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { threshold })
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [threshold, onIntersect, target])

  return setTarget
}
