import { MouseEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { useI18n } from 'hooks'
import { IUser } from 'types/user'
import { SnackBar } from 'components/_shared'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import RemoveUserModal from './RemoveUserModal'
import { LoadingSpinner, TrashIcon } from 'public/svgs'
import styles from './userList.module.scss'

const UserList = () => {
  const t = useI18n()
  const [openModal, setOpenModal] = useState(false)
  const [users, setUsers] = useState<IUser[]>([])
  const [selectedID, setSelectedID] = useState<string>('')
  const { message, setMessage } = useSnackbar(3000)

  const { isLoading, data } = useQuery(
    ['getAllUserDataDB'],
    () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const result = await response.json()
          return result.users
        })
        .catch((err) => {
          console.log(err)
        }),
    {
      // error , success false 로직 추가
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
            users.map((value: IUser) => (
              <tr key={value._id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>
                  <button type='button' aria-label='remove user' data-id={value._id} onClick={handleRemoveButton}>
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
