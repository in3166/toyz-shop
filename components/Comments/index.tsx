import { useSession } from 'next-auth/react'
import { useFormInput } from '@hooks/useFormInput'
import { InputText } from '@components/_shared'
import CommentList from './CommentList'
import styles from './comments.module.scss'
import { useState } from 'react'
import { ICommentItem } from 'types/commnet'

interface ICommentsProps {
  productId: string
  commnets: ICommentItem[]
}

const Comments = ({ productId, commnets }: ICommentsProps) => {
  const comment = useFormInput({ validateFunction: (val) => val.length > 0, initialValue: '' })
  const { data: session } = useSession()
  const [commentList, setCommentList] = useState(commnets)
  const handleSubmitComment = () => {
    if (!comment.valueIsValid || !session?.user._id) return
    const data = { product: productId, user: session?.user._id, text: comment.value }
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=31536000',
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      const result = await response.json()
      if (result.success) {
        // TODO: snackbar
        comment.setValue('')
        setCommentList((prev) => [...prev, { ...result.comments, user: session?.user }])
      }
    })
  }

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentSubmit}>
        <input type='text' />
        <InputText
          type='textarea'
          value={comment.value}
          onChange={comment.valueChangeHandler}
          reset={comment.reset}
          onBlur={comment.inputBlurHandler}
          hasError={comment.hasError}
          formTitle='댓글 작성'
        />
        <div className={styles.submitButtonWrapper}>
          <button type='button' onClick={handleSubmitComment} className={styles.submitButton}>
            등록
          </button>
        </div>
      </div>
      <CommentList commentArray={commentList} />
    </div>
  )
}

export default Comments
