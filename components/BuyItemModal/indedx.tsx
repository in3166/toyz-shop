import { useI18n } from 'hooks'
import { loadTossPayments } from '@tosspayments/payment-sdk'

import { BASE_URL } from 'src/fixtures'
import { IProductItem } from 'types/product'
import Modal from 'components/_shared/Modal'
import { currencyFormatter } from 'src/utils/currencyFormatter'
import styles from './buyItemModal.module.scss'

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'

interface IBuyItemModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  product: IProductItem
  lang: string
  buyer?: string
}

const BuyItemModal = ({ onClose, product, lang, buyer, setMessage }: IBuyItemModalProps) => {
  const t = useI18n()

  const handleClickBuy = async () => {
    loadTossPayments(clientKey)
      .then((tossPayments) => {
        // 카드 결제 메서드 실행
        tossPayments
          .requestPayment('가상계좌', {
            amount: product?.price,
            orderId: `${product._id}`,
            orderName: `buyProduct${product._id}`,
            customerName: `toy-z`,
            successUrl: `${BASE_URL}/success?seller=${product?.owner?._id}&price=${product?.price}&buyer=${buyer}`,
            failUrl: `${BASE_URL}/failed?seller=${product?.owner?._id}&price=${product?.price}&buyer=${buyer}`,
            validHours: 24,
            cashReceipt: {
              type: '소득공제',
            },
          })
          .catch(() => {
            setMessage('결제가 취소되었습니다.')
            onClose()
          })
      })
      .catch(() => {
        setMessage('결제 페이지 로드를 실패하였습니다.')
        onClose()
      })
  }

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('buyModal.header')}`}</header>
      <form className={styles.content}>
        <dl>
          <div>
            <dt>{`${t('buyModal.title')}`}</dt>
            <dd>{product?.title}</dd>
          </div>
          <div>
            <dt>{`${t('buyModal.image')}`}</dt>
            <dd>
              <img src={product?.image} alt='items' />
            </dd>
          </div>
          <div>
            <dt>{`${t('buyModal.price')}`}</dt>
            <dd>
              {currencyFormatter(product?.price)} <sub>(원)</sub>
            </dd>
          </div>
        </dl>
      </form>
      <footer className={styles.footer}>
        {/* <Paypal amount={price} /> */}
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          {`${t('buyModal.closeButton')}`}
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          {`${t('buyModal.buyButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default BuyItemModal
