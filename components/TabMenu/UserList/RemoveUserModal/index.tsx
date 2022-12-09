import Modal from 'components/_shared/Modal'
import { useI18n } from 'hooks'
import { useCallback } from 'react'
// import { removeUserDB } from 'services/user'
import styles from './removeUserModal.module.scss'

interface IRemoveUserModalProps {
  onClose: () => void
  // setMessage: (text: string) => void
  // setUsers: Dispatch<SetStateAction<IDBUser[]>>
  // id: string
}

const RemoveUserModal = ({ onClose }: IRemoveUserModalProps) => {
  const t = useI18n()
  const handleClickBuy = useCallback(() => {
    // removeUserDB(id)
    //   .then(() => {
    //     setUsers((prev) => prev.filter((user) => user.key !== id))
    //     setMessage('삭제 완료!')
    //   })
    //   .catch((err) => {
    //     setMessage(`삭제 실패: ${err}`)
    //   })
    //   .finally(() => {
    //     onClose()
    //   })
  }, [])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('common:removeUserModal.header')}`}</header>
      <div className={styles.content}>{`${t('common:removeUserModal.content')}`}</div>
      <footer className={styles.footer}>
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          {`${t('common:removeUserModal.closeButton')}`}
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          {`${t('common:removeUserModal.confirmButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default RemoveUserModal
