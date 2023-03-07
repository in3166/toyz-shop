import { IProductItem } from 'types/product'
import { currencyFormatter, fetchToAPI } from 'utils'
import styles from './productContent.module.scss'
import { useI18n, useState } from 'hooks'
import dayjs from 'dayjs'
import { DropDown } from '@components/_shared'
import ItemStatusModal from '@components/ItemStatusModal'
import BuyItemModal from '@components/BuyItemModal'
import { IAuthToken } from 'types/auth'

interface IProductContentProps {
  product: IProductItem
  user: IAuthToken | undefined
  setMessage: (text: string) => void
}

const ProductContent = ({ product, user, setMessage }: IProductContentProps) => {
  const t = useI18n()
  const statusSelectList = [
    `${t('common:filter:status:onSale')}`,
    `${t('common:filter:status:reserved')}`,
    `${t('common:filter:status:sold')}`,
  ]
  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [status, setStatus] = useState((product?.status || 1) - 1)
  const [openStatusModal, setOpenStatusModal] = useState(false)

  const handleOpenBuyModal = () => {
    if (!user || user?.role !== 1) {
      setMessage('로그인하세요.')
      return
    }
    setOpenBuyModal(true)
  }

  const handleCloseModal = () => {
    setOpenBuyModal(false)
  }

  const handleStatusOnConfirm = async (selectedStatus: number) => {
    const url = `/api/products/${product?._id}`
    const response = await fetchToAPI(url, 'PATCH', { status: selectedStatus + 1 })
    if (!response?.success) {
      setStatus(product?.status)
    }
    setOpenStatusModal(false)
  }

  const handleChangedStatus = async (selectedStatus: number) => {
    if (user?._id !== product?.owner?._id) return
    if (!selectedStatus) {
      setOpenStatusModal(true)
      return
    }
    await handleStatusOnConfirm(selectedStatus)
  }

  const productStatus =
    user?.id === product.owner.id ? (
      <DropDown
        currentValue={status}
        selectList={statusSelectList}
        setCurrentValue={setStatus}
        handleChangedFilter={handleChangedStatus}
      />
    ) : (
      statusSelectList[(product?.status || 1) - 1]
    )

  return (
    <>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.image}>
            <img src={product?.image} alt='items' />
          </div>
          <dl className={styles.productInfo}>
            <div>
              <dt>{`${t('price')}`}</dt>
              <dd>
                {currencyFormatter(product?.price)} <sub>(원)</sub>
              </dd>
            </div>
            <div>
              <dt>{`${t('owner')}`}</dt>
              <dd>{product?.owner.name}</dd>
            </div>
            <div>
              <dt> {`${t('date')}`}</dt>
              <dd>{dayjs(product?.createdAt).format('YYYY-MM-DD')}</dd>
            </div>
            <div>
              <dt> {`${t('status')}`}</dt>
              <dd>{productStatus}</dd>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                type='button'
                aria-label='open buy modal'
                className={styles.buyButton}
                onClick={handleOpenBuyModal}
              >
                {`${t('buyButton')}`}
              </button>
            </div>
          </dl>
        </div>
        <div className={styles.description}>
          <div>{product?.description}</div>
        </div>
      </div>
      {openBuyModal && (
        <BuyItemModal onClose={handleCloseModal} product={product} setMessage={setMessage} buyer={user?._id} />
      )}
      {openStatusModal && (
        <ItemStatusModal
          onClose={() => {
            setOpenStatusModal(false)
            if (product?.status >= 1) setStatus(product.status - 1)
          }}
          onConfirm={() => handleStatusOnConfirm(0)}
        />
      )}
    </>
  )
}

export default ProductContent
