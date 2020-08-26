import { obj } from './testExportObj'

obj.a = a

export function a() {
  return 'a'
}

export function urlParse() {
  const url = window.location.search
  const obj = {}
  const reg = /[?&][^?&]+=[^?&]+/g
  const arr = url.match(reg)
  // ['?id=12345','&a=b']
  if (arr) {
    arr.forEach(item => {
      const tempArr = item.substr(1).split('=')
      const key = decodeURIComponent(tempArr[0])
      const val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }

  return obj
}

export function channelIdentify() {
  const ua = navigator.userAgent
  if (/MicroMessenger/.test(ua)) {
    return 'wx'
  } else if (/Alipay/.test(ua)) {
    return 'ali'
  }
  return 'other'
}

export function debounce(fn, wait, immediate) {
  let timer = null

  return function() {
    const args = arguments
    const context = this

    if (immediate && !timer) {
      fn.apply(context, args)
    }

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
