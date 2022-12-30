import { ChangeEvent, RefObject } from 'react'

import { useMount } from 'hooks'
import { InputCancelIcon } from 'public/svgs'
import { cx } from 'styles'
import styles from './inputText.module.scss'

interface IInputFormProps {
  formTitle: string
  value: string | number
  onBlur?: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  reset?: () => void
  hasError?: boolean
  type: string
  errorMessage?: string
  inputFocusRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>
  read?: boolean
  rows?: number
}

const InputText = (props: IInputFormProps) => {
  const { formTitle, value, onBlur, onChange, reset, hasError, type, errorMessage, inputFocusRef, read, rows } = props
  const handleResetOnclick = () => {
    if (reset) reset()
  }

  useMount(() => {
    inputFocusRef?.current?.focus()
  })

  return (
    <div className={styles.inputForm}>
      <label htmlFor={formTitle} className={styles.formTitle}>
        {formTitle}
      </label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={formTitle}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={cx(styles.inputText, { [styles.readOnlyInput]: read })}
          ref={inputFocusRef as RefObject<HTMLInputElement>}
          readOnly={read}
          autoComplete={`current-${formTitle}`}
        />
      ) : (
        // <input type="number" onChange={onChange}/>
        <textarea
          id={formTitle}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={cx(styles.inputTextarea, { [styles.readOnlyInput]: read })}
          ref={inputFocusRef as RefObject<HTMLTextAreaElement>}
          readOnly={read}
          autoComplete={`current-${formTitle}`}
          rows={rows}
        />
      )}
      {/* {!read && <InputCancelIcon className={cx({ [styles.iconHidden]: value === '' })} onClick={handleResetOnclick} />} */}
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default InputText
