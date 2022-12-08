import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useI18n } from 'hooks'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useFormInput from 'hooks/useFormInput'
import { IMongooseError } from 'types/mongo'
import { validateProductDescription, validateProductPrice, validateProductTitle } from 'utils/validates/validateInput'
import InputText from 'components/_shared/InputText'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import styles from './uploadImageForm.module.scss'
import { IOnUploadSubmit } from 'types/product'

interface IUploadImageFormProps {
  onUploadSubmit: (data: IOnUploadSubmit, file: File) => Promise<IMongooseError | null>
}

const DEFAULT_IMAGE_PATH = '/products/default.png'

const UploadImageForm = ({ onUploadSubmit }: IUploadImageFormProps) => {
  const t = useI18n()
  const router = useRouter()
  const inputFocusRef = useRef(null)
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const { message, setMessage } = useSnackbar()
  const [imageFile, setImageFile] = useState<File>()
  const [imagePreviewUrl, setImagePreviewUrl] = useState(DEFAULT_IMAGE_PATH)
  const { data: session, status } = useSession()
  console.log('session: ', session, status)

  useEffect(() => {
    if (!session && status !== 'loading') {
      setSnackBarStatus('warning')
      setMessage('Please Login')
      router.push('/signin')
    }
  }, [router, session, setMessage, status])

  const title = useFormInput({ validateFunction: validateProductTitle })
  const price = useFormInput({ validateFunction: validateProductPrice })
  const description = useFormInput({ validateFunction: validateProductDescription })

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    const { files } = e.currentTarget
    if (!files) return
    if (files && files?.length < 1) return

    reader.onloadend = () => {
      setImageFile(files[0])
      setImagePreviewUrl(reader.result?.toString() || '')
    }
    reader.readAsDataURL(files[0])
  }

  const handleOnSubmit = async (e: FormEvent) => {
    setLoading(true)
    console.log(imageFile)
    e.preventDefault()
    if (!imageFile) {
      setSnackBarStatus('warning')
      setMessage(`${t('upload.snackBarImageNotValid')}`)
      setLoading(false)
      return
    }
    if (!title.valueIsValid || !price.valueIsValid || !description.valueIsValid) {
      setSnackBarStatus('warning')
      setMessage(`${t('upload.snackBarValid')}`)
      setLoading(false)
      return
    }

    const data = {
      owner: session?.user._id,
      description: description.value,
      title: title.value,
      price: Number(price.value),
    }

    // console.log(data)
    const error = await onUploadSubmit(data, imageFile)
    console.log(error)
    setLoading(false)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.UploadImageForm}>
      {loading && <div className={styles.loadingBar} />}
      <div className={styles.topWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.previewImage} src={imagePreviewUrl} alt='product preview' />
          <fieldset className={styles.priviewFilebox}>
            <input
              className={styles.uploadName}
              value={imagePreviewUrl === DEFAULT_IMAGE_PATH ? '' : imageFile?.name}
              readOnly
              placeholder='상품 사진 등록'
            />
            <label htmlFor='img' className={styles.plus} />
            <input className={styles.inputFile} type='file' id='img' onChange={(e) => handleImageChange(e)} />
          </fieldset>
        </div>

        <div className={styles.infoWrapper}>
          <InputText
            type='text'
            formTitle={`${t('upload.title')}`}
            value={title.value}
            onChange={title.valueChangeHandler}
            reset={title.reset}
            onBlur={title.inputBlurHandler}
            hasError={title.hasError}
            errorMessage={`${t('upload.errorMessageTitle')}`}
            inputFocusRef={inputFocusRef}
          />
          <InputText
            type='number'
            formTitle={`${t('upload.price')}`}
            value={price.value}
            onChange={price.valueChangeHandler}
            reset={price.reset}
            onBlur={price.inputBlurHandler}
            hasError={price.hasError}
            errorMessage={`${t('upload.errorMessagePrice')}`}
          />
        </div>
      </div>
      <InputText
        type='textarea'
        formTitle={`${t('upload.description')}`}
        value={description.value}
        onChange={description.valueChangeHandler}
        reset={description.reset}
        onBlur={description.inputBlurHandler}
        hasError={description.hasError}
        errorMessage={`${t('upload.errorMessageDescription')}`}
        rows={5}
      />

      <div className={styles.submitButtonWrapper}>
        <button type='submit' className={styles.submitButton}>
          {`${t('upload.submitBtn')}`}
        </button>
      </div>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </form>
  )
}

export default UploadImageForm
