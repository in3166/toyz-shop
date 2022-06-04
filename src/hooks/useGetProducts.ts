import { IProductItem } from 'types/product'
import { getProudcts } from 'services/products'
import { useQuery } from 'react-query'
import { useAppDispatch } from './useAppDispatch'
import { isNumber } from 'lodash'
import { setProductList } from 'states/product'

export const useGetProducts = (id: number) => {
  const dispatch = useAppDispatch()

  return useQuery(
    ['getProductsApi', id],
    () =>
      getProudcts(id).then((res) => {
        return res.data
      }),
    {
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
      enabled: isNumber(id),
      select: (value: IProductItem[]) => {
        if (!value) return []
        return value
      },
      onSuccess: (value) => {
        dispatch(setProductList(value))
      },
    }
  )
}
