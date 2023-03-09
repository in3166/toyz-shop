import React, { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { useI18n, useFormInput } from 'hooks';
import { IUser } from 'types/user';
import { IMongooseError } from 'types/mongo';
import { validateEmail, validateId, validateName, validatePassword, validatePhoneNumber } from 'utils';
import { InputText, SnackBar } from 'components/_shared';
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar';
import styles from './signUpForm.module.scss';

interface ISignUpFormProps {
  onAddUser: (user: IUser) => Promise<IMongooseError | null>;
}

const SignUpForm = ({ onAddUser }: ISignUpFormProps) => {
  const t = useI18n();
  const inputFocusRef = useRef(null);
  const router = useRouter();
  const userEmail = router.query?.email?.toString() ?? '';
  const [snackBarStatus, setSnackBarStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const { message, setMessage } = useSnackbar(5000);

  const id = useFormInput({ validateFunction: validateId, initialValue: '' });
  const name = useFormInput({ validateFunction: validateName, initialValue: '' });
  const password = useFormInput({ validateFunction: validatePassword, initialValue: '' });
  const phone = useFormInput({ validateFunction: validatePhoneNumber, initialValue: '' });
  const email = useFormInput({ validateFunction: validateEmail, initialValue: userEmail || '' });

  const handleOnSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!id.valueIsValid || !password.valueIsValid || !phone.valueIsValid || !name.valueIsValid) {
      setSnackBarStatus('warning');
      setMessage(`${t('common:signUp.snackBar')}`);
      setLoading(false);
      return;
    }

    const newUser = {
      id: id.value,
      name: name.value,
      password: password.value,
      email: userEmail || email.value,
      phone: phone.value,
    };

    const error = await onAddUser(newUser);
    if (error) {
      setSnackBarStatus('error');
      setMessage(`[${error.code || 'Error'}]: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.signUpForm}>
      {loading && <div className={styles.loadingBar} />}
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleID')}`}
        value={id.value}
        onChange={id.valueChangeHandler}
        reset={id.reset}
        onBlur={id.inputBlurHandler}
        hasError={id.hasError}
        errorMessage={`${t('common:signUp.errorMessageID')}`}
        inputFocusRef={inputFocusRef}
      />
      <InputText
        type='password'
        formTitle={`${t('common:signUp.titlePW')}`}
        value={password.value}
        onChange={password.valueChangeHandler}
        reset={password.reset}
        onBlur={password.inputBlurHandler}
        hasError={password.hasError}
        errorMessage={`${t('common:signUp.errorMessagePW')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleName')}`}
        value={name.value}
        onChange={name.valueChangeHandler}
        reset={name.reset}
        onBlur={name.inputBlurHandler}
        hasError={name.hasError}
        errorMessage={`${t('common:signUp.errorMessageName')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titlePhone')}`}
        value={phone.value}
        onChange={phone.valueChangeHandler}
        reset={phone.reset}
        onBlur={phone.inputBlurHandler}
        hasError={phone.hasError}
        errorMessage={`${t('common:signUp.errorMessagePhone')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleEmail')}`}
        value={userEmail || email.value}
        onChange={email.valueChangeHandler}
        reset={email.reset}
        onBlur={email.inputBlurHandler}
        hasError={email.hasError}
        read={userEmail !== ''}
        errorMessage={(userEmail === '' && `${t('common:signUp.errorMessageEmail')}`) || ''}
      />

      <footer className={styles.footer}>
        <button type='submit' className={styles.signUpButton} aria-label='submit signup form'>
          {`${t('signUp.button')}`}
        </button>
      </footer>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </form>
  );
};

export default SignUpForm;
