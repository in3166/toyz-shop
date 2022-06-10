import { LoadingSpinner } from 'assets/svgs'
import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import { MouseEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getAllUserDataDB } from 'services/user'
import { IDBUser } from 'types/user'
import RemoveUserModal from './RemoveUserModal'
import styles from './userList.module.scss'

const UserList = () => {
  const [users, setUsers] = useState<IDBUser[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedID, setSelectedID] = useState<string>('')
  const { message, setMessage } = useSnackbar(3000)
  console.log(users)
  const { isLoading, data } = useQuery(
    ['getAllUserDataDB'],
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
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Withdrawal</th>
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
                    탈퇴
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
