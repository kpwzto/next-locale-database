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
  let locale = router.locale ?? 'en'
  return {
    getLang: (str: unknown,  forceLang?: string): string => {
      if (str === undefined) {
        return ''
      }
      
      if (typeof str === 'number') {
        str = str.toString()
      }

      if (typeof str !== 'string') {
        console.warn('next-locale-database: Input is not a string!')
        return ''
      }

      if (!isJsonString(str) || !isLocaleFormat(str)) {
        return options?.revert === true ? str : ''
      }

      // Force a language
      if(forceLang){
        locale = forceLang;
      }

      return getLocaleString(str, locale)
    },
  }
}
