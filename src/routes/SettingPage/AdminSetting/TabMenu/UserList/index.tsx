import { useState } from 'react'
import { useQuery } from 'react-query'
import { getAllUserDataDB } from 'services/user'
import { IDBUser } from 'types/user'
import styles from './userList.module.scss'

const UserList = () => {
  const [users, setUsers] = useState<IDBUser[]>([])
  console.log(users)
  useQuery(
    ['getAllUserDataDB'],
    () =>
      getAllUserDataDB().then((res: IDBUser[]) => {
        setUsers(res)
        return res
      }),
    {
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
    }
  )

  return (
    <table className={styles.userTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PHONE</th>
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
                <button type='button'>탈퇴</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default UserList
