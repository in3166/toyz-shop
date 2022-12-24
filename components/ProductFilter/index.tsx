import DropDown from 'components/_shared/DropDown'
import { useI18n, useState } from 'hooks'
import { Dispatch, SetStateAction } from 'react'
import styles from './productFilter.module.scss'

interface IProductFilter {
  sort: number
  setSort: Dispatch<SetStateAction<number>>
  status: number
  setStatus: Dispatch<SetStateAction<number>>
  handleChangedFilter: ({
    selectedSort,
    selectedStatus,
  }: {
    selectedSort: number
    selectedStatus: number
  }) => Promise<any>
}
const ProductFilter = ({ handleChangedFilter, sort, setSort, status, setStatus }: IProductFilter) => {
  const t = useI18n()
  const statusSelectList = [
    `${t('common:filter:status:all')}`,
    `${t('common:filter:status:onSale')}`,
    `${t('common:filter:status:reserved')}`,
    `${t('common:filter:status:sold')}`,
  ]

  const sortSelectList = [
    `${t('common:filter:sort:latest')}`,
    `${t('common:filter:sort:oldest')}`,
    `${t('common:filter:sort:highPrice')}`,
    `${t('common:filter:sort:lowPrice')}`,
  ]

  return (
    <div className={styles.filterWrapper}>
      <DropDown
        title='Status'
        currentValue={status}
        selectList={statusSelectList}
        setCurrentValue={setStatus}
        handleChangedFilter={(selectedStatus) => handleChangedFilter({ selectedSort: sort, selectedStatus })}
      />
      <DropDown
        title='Sort'
        currentValue={sort}
        size='medium'
        selectList={sortSelectList}
        setCurrentValue={setSort}
        handleChangedFilter={(selectedSort) => handleChangedFilter({ selectedStatus: status, selectedSort })}
      />
    </div>
  )
}

export default ProductFilter
