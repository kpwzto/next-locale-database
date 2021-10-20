import { useRouter } from 'next/router'
import { getLocaleString, isJsonString, isLocaleFormat } from './lib'

interface ILocale {
  getLang: (str: unknown) => string
}
export default function useLocale(): ILocale {
  const router = useRouter()
  const locale = router.locale ?? 'en'
  return {
    getLang: (str: unknown): string => {
      if (typeof str !== 'string') {
        console.warn('next-locale-database: Input is not a string!')
        return ''
      }
      if (!isJsonString(str) || !isLocaleFormat(str)) {
        return ''
      }
      return getLocaleString(str, locale)
    },
  }
}
