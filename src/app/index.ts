import { useRouter } from 'next/router'
import { getLocaleString, isJsonString, isLocaleFormat } from './lib'

interface ILocale {
  getLang: (str: unknown) => string
}
type TOptions = {
  revert: boolean
}
export default function useLocale(options?: TOptions): ILocale {
  const router = useRouter()
  const locale = router.locale ?? 'en'
  return {
    getLang: (str: unknown): string => {
      if (str === undefined) {
        return ''
      }
      if (typeof str !== 'string') {
        console.warn('next-locale-database: Input is not a string!')
        return ''
      }
      if (!isJsonString(str) || !isLocaleFormat(str)) {
        return options?.revert === true ? str : ''
      }
      return getLocaleString(str, locale)
    },
  }
}
