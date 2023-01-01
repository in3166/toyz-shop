import { Dispatch, SetStateAction } from 'react'
import dayjs from 'dayjs'

import { IBanner } from 'types/banners'
import { IProductItem } from 'types/product'
import { currencyFormatter } from 'utils'
import { BASE_URL } from '__tests__/fixtures'
import styles from './productTable.module.scss'

interface IProductTable {
  products: IProductItem[]
  setBanners: Dispatch<SetStateAction<IBanner[]>>
}

const ProductTable = ({ products, setBanners }: IProductTable) => {
  const handleAddBanner = async (value: IProductItem) => {
    const response = await fetch(`${BASE_URL}/api/banners`, {
      method: 'POST',
      headers: { 'Content-Type': 'apllication/jspn' },
      body: value._id,
    })
    const result = await response.json()

    if (result.success) {
      setBanners((prev) => [...prev, { _id: result.banners._id, item: value }])
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h2>Product List</h2>
      </header>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Date</th>
            <th>Desc.</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((value, index) => (
            <tr key={value._id}>
              <td className={styles.tdIndex}>{index}</td>
              <td className={styles.tdTitle}>{value.title}</td>
              <td className={styles.tdPrice}>{currencyFormatter(value.price)}</td>
              <td className={styles.tdDate}>{dayjs(value.createdAt).format('YYYY.MM.DD')}</td>
              <td className={styles.tdDescription}>{value.description}</td>
              <td className={styles.tdAdd}>
                <button
                  className={styles.addButton}
                  aria-label='add item to banner list'
                  type='button'
                  onClick={() => handleAddBanner(value)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductTable
