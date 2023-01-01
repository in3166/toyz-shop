import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { fetchToAPI } from 'utils'
import { IProductItem } from 'types/product'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  { threshold = 0.7 }: Args,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setProductsList: Dispatch<SetStateAction<IProductItem[]>>,
  query: {
    searchText?: string
    status?: number
    sort?: number
    userId?: string
  }
) {
  const { userId, status, sort, searchText } = query
  const [currentPage, setCurrentPage] = useState(1)
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null)
  const [isEnd, setIsEnd] = useState(false)

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entries]) => {
      if (entries.isIntersecting) {
        setIsLoading(true)
        const pageNumber = currentPage + 1
        // TODO: 분리 필요 => 요청, setState, react-query
        fetch(
          `/api/products?user=${userId}&status=${status}&sort=${sort}&searchText=${searchText}&page=${pageNumber}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'GET',
          }
        )
          .then(async (response: any) => {
            if (response.ok) {
              const result = await response.json()
              if (!result?.products || result?.products?.length <= 0) setIsEnd(true)
              else setProductsList((prev) => [...prev, ...result.products])
              setCurrentPage(pageNumber)
            }
          })
          .catch((err) => console.error(err))
          .finally(() => {
            setIsLoading(false)
          })
      }
    },
    [currentPage, searchText, setIsLoading, setProductsList, sort, status, userId]
  )

  useEffect(() => {
    if (!target) return undefined

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { threshold })
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [threshold, onIntersect, target])

  const handleChangedFilter = async ({
    selectedSort,
    selectedStatus,
  }: {
    selectedSort: number
    selectedStatus: number
  }) => {
    setIsLoading(true)

    let tempUrl = `/api/products?user=${userId}&page=1&status=${selectedStatus}&sort=${selectedSort}`
    if (query.searchText) tempUrl += `&text=${query.searchText}`

    const response = await fetchToAPI(tempUrl, 'GET')
    if (response) {
      setProductsList(response?.products)
      setCurrentPage(1)
      setIsEnd(false)
    }
    setIsLoading(false)
  }

  return { setTarget, isEnd, handleChangedFilter }
}
