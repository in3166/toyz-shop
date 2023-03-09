import { useState } from 'react';
import { useSession } from 'next-auth/react';

import { useI18n } from 'hooks';
import { useFormInput } from 'hooks/useFormInput';
import { ICommentItem } from 'types/commnet';
import { InputText, SnackBar } from 'components/_shared';
import CommentList from './CommentList';
import styles from './comments.module.scss';
import { useSnackbar } from '@components/_shared/SnackBar/useSnackBar';

interface ICommentsProps {
  productId: string;
  commnets: ICommentItem[];
}

const Comments = ({ productId, commnets }: ICommentsProps) => {
  const t = useI18n();
  const comment = useFormInput({ validateFunction: (val) => val.length > 0, initialValue: '' });
  const { data: session } = useSession();
  const [commentList, setCommentList] = useState(commnets);
  const [snackBarStatus, setSnackBarStatus] = useState('');
  const { message, setMessage } = useSnackbar(5000);

  const handleSubmitComment = () => {
    if (!session?.user._id) {
      setSnackBarStatus('warning');
      setMessage(`${t('common:comment.notLoggedIn')}`);
      return;
    }
    if (!comment.valueIsValid) {
      setSnackBarStatus('warning');
      setMessage(`${t('common:comment.notValidContent')}`);
      return;
    }

    const data = { product: productId, user: session?.user._id, text: comment.value };

    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=31536000',
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      const result = await response.json();
      if (result.success) {
        // TODO: snackbar
        comment.setValue('');
        setCommentList((prev) => [...prev, { ...result.comments, user: session?.user }]);
      }
    });
  };

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
          formTitle={`${t('commentLabel')}`}
        />
        <div className={styles.submitButtonWrapper}>
          <button type='button' onClick={handleSubmitComment} className={styles.submitButton}>
            {`${t('commentSubmit')}`}
          </button>
        </div>
      </div>
      <CommentList commentArray={commentList} />
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </div>
  );
};

export default Comments;
