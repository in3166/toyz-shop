import { useI18n } from 'hooks'

import Modal from 'components/_shared/Modal'
import styles from './itemStatusModal.module.scss'

interface IItemStatusModalProps {
  onClose: () => void
  onConfirm: () => void
}

const ItemStatusModal = ({ onClose, onConfirm }: IItemStatusModalProps) => {
  const t = useI18n()

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('statusModal.header')}`}</header>
      <main className={styles.content}>
        <div> {`${t('statusModal.message')}`}</div>
      </main>
      <footer className={styles.footer}>
        <button type='button' aria-label='close the buy modal' className={styles.cancelButton} onClick={onClose}>
          {`${t('statusModal.closeButton')}`}
        </button>
        <div className={styles.buyButtonWrapper}>
          <button type='button' aria-label='toggle the buy menu' className={styles.buyButton} onClick={onConfirm}>
            {`${t('statusModal.confirmButton')}`}
          </button>
        </div>
      </footer>
    </Modal>
  )
}

export default ItemStatusModal
