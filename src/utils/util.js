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

export const getPopeBtn = pid => {
  var popedoms2 = ''
  var buttonData = []
  var sStorage = window.sessionStorage
  popedoms2 = sStorage.getItem('buttons')
  if (popedoms2) {
    var data = JSON.parse(popedoms2)

    var length = data.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < pid.length; j++) {
        if (data[i].popedomParentId == pid[j]) {
          buttonData.push(data[i])
        }
      }
    }
  }
  return buttonData
}