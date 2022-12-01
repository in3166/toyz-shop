import { MouseEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { IDBUser } from 'types/user'
import { useI18n } from 'hooks'
import { getAllUserDataDB } from 'services/user'

import RemoveUserModal from './RemoveUserModal'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import { LoadingSpinner, TrashIcon } from 'public/svgs'
import styles from './userList.module.scss'

const UserList = () => {
  const t = useI18n()
  const [users, setUsers] = useState<IDBUser[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedID, setSelectedID] = useState<string>('')
  const { message, setMessage } = useSnackbar(3000)

  const { isLoading, data } = useQuery(
    ['getAllUserDataDB', users.length],
    () =>
      getAllUserDataDB().then((res: IDBUser[]) => {
        return res
      }),
    {
      enabled: true,
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
    }
  )

  useEffect(() => {
    if (data && data.length > 0) setUsers(data)
  }, [data])

  const loading = isLoading && (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  )

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleRemoveButton = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset
    setSelectedID(id ?? '')
    setOpenModal(true)
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>{`${t('common:adminSetting.userList.id')}`}</th>
            <th>{`${t('common:adminSetting.userList.name')}`}</th>
            <th>{`${t('common:adminSetting.userList.phone')}`}</th>
            <th>{`${t('common:adminSetting.userList.withdrawal')}`}</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((value) => (
              <tr key={value.key}>
                <td>{value.data.id}</td>
                <td>{value.data.name}</td>
                <td>{value.data.phone}</td>
                <td>
                  <button type='button' data-id={value.key} onClick={handleRemoveButton}>
                    <TrashIcon className={styles.trashIcon} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading}
      {openModal && (
        <RemoveUserModal onClose={handleCloseModal} id={selectedID} setMessage={setMessage} setUsers={setUsers} />
      )}
      {message && <SnackBar message={message} setMessage={setMessage} />}
    </div>
  )
}

export default UserList
