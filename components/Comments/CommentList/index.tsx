import dayjs from 'dayjs'
import { ICommentItem } from 'types/commnet'
import styles from './commentList.module.scss'

interface ICommentListProps {
  commentArray: ICommentItem[]
}
const CommentList = ({ commentArray }: ICommentListProps) => {
  return (
    <div>
      <ul>
        {commentArray.length > 0 &&
          commentArray.map((value) => {
            return (
              <li key={value._id} className={styles.commentWrapper}>
                <div className={styles.commentUser}>
                  {value.user.id} <sub>{dayjs(value.createdAt).format('YYYY-MM-DD hh:mm:ss')}</sub>
                </div>
                <div className={styles.text}>{value.text}</div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CommentList
