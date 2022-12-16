import { Dispatch, SetStateAction } from 'react'
import { IBanner } from 'types/banners'
import { IProductItem } from 'types/product'
import styles from './productTable.module.scss'
import dayjs from 'dayjs'

interface IProductTable {
  products: IProductItem[]
  setBanners: Dispatch<SetStateAction<IBanner[]>>
}

const ProductTable = ({ products, setBanners }: IProductTable) => {
  const handleAddBanner = async (value: IProductItem) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/banners`, {
      method: 'POST',
      headers: { 'Content-Type': 'apllication/jspn' },
      body: value._id,
    })
    const result = await response.json()
    console.log('add banner', result)
    if (result.success) {
      setBanners((prev) => [...prev, { _id: result.banners._id, item: value }])
    }
  }

  return (
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
            <td>{index}</td>
            <td>{value.title}</td>
            <td>{value.price}</td>
            <td>{dayjs(value.createdAt).format('YYYY.MM.DD')}</td>
            <td>{value.description}</td>
            <td>
              <button type='button' onClick={() => handleAddBanner(value)}>
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable
