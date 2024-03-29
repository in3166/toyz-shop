import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

interface IUseFormInputProps {
  validateFunction?: (value: string) => boolean;
  initialValue?: string;
}

export const useFormInput = ({ validateFunction, initialValue = '' }: IUseFormInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = true;
  if (validateFunction) valueIsValid = validateFunction(value);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value: currentValue } = e.currentTarget;
    setValue(currentValue);
  }, []);

  const valueClickHandler = useCallback((e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value: currentValue } = e.currentTarget;
    setValue(currentValue);
  }, []);

  const inputBlurHandler = useCallback(() => {
    setIsTouched(true);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setIsTouched(false);
  }, [initialValue]);

  return {
    value,
    setValue,
    hasError,
    valueIsValid,
    valueChangeHandler,
    valueClickHandler,
    inputBlurHandler,
    reset,
  };
};
