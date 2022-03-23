import locales from './locales'
import lodash from 'lodash'
export function isJsonString(str: string): boolean {
  try {
    JSON.parse(str)
    if(str.charAt(0) != "[" && str.charAt(0) != "{"){
      return false
    }
  } catch (e) {
    console.warn('next-locale-database: Invalid json format!')
    return false
  }
  return true
}

export function isLocaleFormat(str: string): boolean {
  try {
    const obj = JSON.parse(str)
    let result = true
    Object.keys(obj).forEach((key) => {
      if (
        !lodash.invert(locales).hasOwnProperty(key) &&
        !locales.hasOwnProperty(key)
      ) {
        result = false
      }
    })
    if (!result) {
      throw new Error('error')
    }

    return result
  } catch (e) {
    console.warn('next-locale-database: Invalid locale format!')
    return false
  }
}

export function getLocaleString(str: string, locale: string): string {
  try {
    const obj = JSON.parse(str)
    if (!obj.hasOwnProperty(locale)) {
      return ''
    }
    return obj[locale]
  } catch (e) {
    console.warn('next-locale-database: ' + e)
    return ''
  }
}
