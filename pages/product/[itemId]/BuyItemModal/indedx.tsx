import { useCallback } from 'react'
import { useI18n } from 'hooks'
import Modal from 'components/_shared/Modal'
import styles from './buyItemModal.module.scss'

interface IBuyItemModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  title: string
  price: number
}

const BuyItemModal = ({ onClose, title, price, setMessage }: IBuyItemModalProps) => {
  const t = useI18n()
  const handleClickBuy = useCallback(() => {
    setMessage('구매 완료!')
    onClose()
  }, [onClose, setMessage])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('common:buyModal.header')}`}</header>
      <form className={styles.content}>
        <dl>
          <div>
            <dt>{`${t('common:buyModal.title')}`}</dt>
            <dd>{title}</dd>
          </div>
          <div>
            <dt>{`${t('common:buyModal.price')}`}</dt>
            <dd>{price} 만원</dd>
          </div>
        </dl>
      </form>
      <footer className={styles.footer}>
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          {`${t('common:buyModal.closeButton')}`}
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          {`${t('common:buyModal.buyButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default BuyItemModal
