import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { IProductItem } from 'types/product'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  { threshold = 0.7 }: Args,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setProductsList: Dispatch<SetStateAction<IProductItem[]>>,
  url: string
) {
  const [currentPage, setCurrentPage] = useState(1)
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null)
  const [isEnd, setIsEnd] = useState(false)

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entries]) => {
      if (entries.isIntersecting) {
        setIsLoading(true)

        const pageNumber = currentPage + 1
        // TODO: 분리 필요 => 요청, setState
        fetch(`${url}page=${pageNumber}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        })
          .then(async (response: any) => {
            if (response.ok) {
              const result = await response.json()
              if (!result?.products || result?.products?.length <= 0) setIsEnd(true)
              else
                setProductsList((prev) => {
                  console.log(prev)
                  return [...prev, ...result.products]
                })
              setCurrentPage(pageNumber)
            }
          })
          .catch((err) => console.error(err))
          .finally(() => {
            setIsLoading(false)
          })
      }
    },
    [currentPage, setIsLoading, setProductsList, url]
  )

  useEffect(() => {
    if (!target) return undefined

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { threshold })
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [threshold, onIntersect, target])

  return { setTarget, isEnd, setIsEnd, setCurrentPage }
}
