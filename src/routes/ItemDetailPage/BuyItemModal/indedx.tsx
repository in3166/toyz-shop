import Modal from 'components/Modal'
import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import { useCallback } from 'react'
import styles from './buyItemModal.module.scss'

interface IBuyItemModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  title: string
  price: number
}

const BuyItemModal = ({ onClose, title, price, setMessage }: IBuyItemModalProps) => {
  const handleClickBuy = useCallback(() => {
    setMessage('구매 완료!')
    onClose()
  }, [onClose, setMessage])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>구매</header>
      <form className={styles.content}>
        <dl>
          <div>
            <dt>제목</dt>
            <dd>{title}</dd>
          </div>
          <div>
            <dt>가격</dt>
            <dd>{price} 만원</dd>
          </div>
        </dl>
      </form>
      <footer className={styles.footer}>
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          Buy
        </button>
      </footer>
    </Modal>
  )
}

export default BuyItemModal
