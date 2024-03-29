import { useRouter } from 'next/router'
import { getLocaleString, isJsonString, isLocaleFormat } from './lib'

interface ILocale {
  getLang: (str: unknown, forceLang?: string) => string
}
type TOptions = {
  revert?: boolean
}
export default function useLocale(options?: TOptions): ILocale {
  const router = useRouter()
  return {
    getLang: (str: unknown, forceLang?: string): string => {
      let locale = router.locale ?? 'en'
      if (str === undefined) {
        return ''
      }

      if (typeof str === 'number') {
        str = str.toString()
      }

      if (typeof str !== 'string') {
        return ''
      }

      if (!isJsonString(str) || !isLocaleFormat(str)) {
        return options?.revert === true ? str : ''
      }

      // Force a language
      if (forceLang) {
        locale = forceLang
      }

      return getLocaleString(str, locale)
    },
  }
}
