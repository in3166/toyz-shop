import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { useI18n, useFormInput } from 'hooks'
import { IMongooseError } from 'types/mongo'
import { IOnUploadSubmit, IProductItem } from 'types/product'
import { validateProductDescription, validateProductPrice, validateProductTitle } from 'src/utils'
import { InputText, SnackBar } from 'components/_shared'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import styles from './uploadImageForm.module.scss'

interface IUploadImageFormProps {
  onUploadSubmit: (data: IOnUploadSubmit, file?: File) => Promise<IMongooseError | null>
  product?: IProductItem
}

const DEFAULT_IMAGE_PATH = '/products/default.png'
const INITIAL_DESCRIPTION = `판매할 상품의 상세 정보를 작성해주세요. \n 품명: \n 가격: \n 사용 기간: \n 거래 방식: (택배/직거래) \n 장소: `

const UploadImageForm = ({ onUploadSubmit, product }: IUploadImageFormProps) => {
  const t = useI18n()
  const router = useRouter()
  const inputFocusRef = useRef(null)
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const { message, setMessage } = useSnackbar()
  const [imageFile, setImageFile] = useState<File | undefined>()
  const [imagePreviewUrl, setImagePreviewUrl] = useState(product?.image || DEFAULT_IMAGE_PATH)
  const { data: session } = useSession()

  const title = useFormInput({ validateFunction: validateProductTitle, initialValue: product?.title })
  const price = useFormInput({ validateFunction: validateProductPrice, initialValue: product?.price?.toString() })
  const description = useFormInput({
    validateFunction: validateProductDescription,
    initialValue: product?.description || INITIAL_DESCRIPTION,
  })

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
    e.preventDefault()
    if (!imageFile && !product) {
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
      changedImage: 'no',
    }

    const error = await onUploadSubmit(data, imageFile)
    if (error) {
      console.log(error)
    }

    if (product) {
      router.push(`/product/${product._id}`)
    }

    if (!error) {
      setSnackBarStatus('')
      setMessage(`${t('upload.snackBarSuccess')}`)
      setImageFile(undefined)
      title.reset()
      description.reset()
      price.reset()
      setImagePreviewUrl(DEFAULT_IMAGE_PATH)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.uploadImageForm}>
      <div className={styles.topWrapper}>
        {loading && <div className={styles.loadingBar} />}
        <div className={styles.imageWrapper}>
          <img className={styles.previewImage} src={imagePreviewUrl} alt='product preview' />
          <fieldset className={styles.priviewFilebox}>
            <input
              className={styles.uploadName}
              value={
                imagePreviewUrl === product?.image || imagePreviewUrl === DEFAULT_IMAGE_PATH ? '' : imageFile?.name
              }
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
        <button type='submit' className={styles.submitButton} aria-label='submit the upload product form'>
          {`${t('upload.submitBtn')}`}
        </button>
      </div>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </form>
  )
}

export default UploadImageForm
