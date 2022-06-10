import Modal from 'components/Modal'
import { useI18n } from 'hooks'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { removeUserDB } from 'services/user'
import { IDBUser } from 'types/user'
import styles from './removeUserModal.module.scss'

interface IRemoveUserModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  setUsers: Dispatch<SetStateAction<IDBUser[]>>
  id: string
}

const RemoveUserModal = ({ onClose, id, setMessage, setUsers }: IRemoveUserModalProps) => {
  const t = useI18n()
  const handleClickBuy = useCallback(() => {
    removeUserDB(id)
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.key !== id))
        setMessage('삭제 완료!')
      })
      .catch((err) => {
        setMessage(`삭제 실패: ${err}`)
      })
      .finally(() => {
        onClose()
      })
  }, [id, onClose, setMessage])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('front:removeUserModal.header')}`}</header>
      <div className={styles.content}>{`${t('front:removeUserModal.content')}`}</div>
      <footer className={styles.footer}>
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          {`${t('front:removeUserModal.closeButton')}`}
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          {`${t('front:removeUserModal.confirmButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default RemoveUserModal
