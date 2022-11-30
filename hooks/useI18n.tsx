import { TFunction } from 'i18next'
import { useTranslation } from 'next-i18next'

export function useI18n(): TFunction {
  const { t } = useTranslation('common')
  return t
}
