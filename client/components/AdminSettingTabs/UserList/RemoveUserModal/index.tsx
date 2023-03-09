import { Dispatch, SetStateAction, useCallback } from 'react'
import { useI18n } from 'hooks'

import { IUser } from 'types/user'
import { BASE_URL } from 'fixtures'
import { Modal } from 'components/_shared'
import styles from './removeUserModal.module.scss'

interface IRemoveUserModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  setUsers: Dispatch<SetStateAction<IUser[]>>
  id: string
}

const RemoveUserModal = ({ onClose, setMessage, setUsers, id }: IRemoveUserModalProps) => {
  const t = useI18n()
  const handleClickBuy = useCallback(async () => {
    fetch(`${BASE_URL}/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        setUsers((prev) => prev.filter((user) => user.id !== id))
        const result = await response.json()
        if (result.ok) setMessage('삭제 완료!')
      })
      .catch((err) => {
        setMessage(`삭제 실패: ${err}`)
      })
      .finally(() => {
        onClose()
      })
  }, [id, onClose, setMessage, setUsers])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('removeUserModal.header')}`}</header>
      <div className={styles.content}>{`${t('removeUserModal.content')}`}</div>
      <footer className={styles.footer}>
        <button type='button' aria-label='close remove user modal' className={styles.cancelButton} onClick={onClose}>
          {`${t('removeUserModal.closeButton')}`}
        </button>
        <button
          type='button'
          aria-label='confrim remove user'
          className={styles.confirmButton}
          onClick={handleClickBuy}
        >
          {`${t('removeUserModal.confirmButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default RemoveUserModal
