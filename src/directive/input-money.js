import Vue from 'vue'

function onInput(el, ele, binding, vnode) {
  // function handle() {
  //   // 只保留数字
  //   ele.value = ele.value.replace(/[^\d]/g, '')
  // }
  function handle1() {
    // 只保留数字
    // ele.value = ele.value.replace(/[^\d]/g, '')
    // 支持浮点数
    // modifiers为修饰符对象，传入了float，则其float属性为true
    let val = ele.value
    // modifiers为修饰符对象，传入了float，则其float属性为true
    if (binding.modifiers.float) {
      // 清除"数字"和"."以外的字符
      val = val.replace(/[^\d.]/g, '')
      // 只保留第一个“点”号, 清除多余的
      const idx = val.indexOf('.')
      // 当为浮点数时，或者.不是最后一位时(.是最后一位执行判断里的代码没有意义，结果一样)
      if (!(idx === -1 || idx === val.length - 1)) {
        val = val.substr(0, idx) + '.' + val.substr(idx + 1).replace(/\./g, '')
      }
      // 第一个字符如果是.号，则补充前缀0
      val = val.replace(/^\./g, '0.')
    } else {
      val = ele.value.replace(/[^\d]/g, '')
      // 这里是支持负数
      // val = ele.value.replace(/[^-\d]/g, '').replace(/^(-)*(\d*)$/, '$1$2')
    }
    ele.value = val
  }
  // 支持小数位最大位数限制
  // function handle2() {
  //   let val = ele.value
  //   // modifiers为修饰符对象，传入了float，则其float属性为true
  //   if (binding.modifiers.float) {
  //     // 清除"数字"和"."以外的字符
  //     val = val.replace(/[^\d.]/g, '')
  //     // 只保留第一个“点”号, 清除多余的
  //     const idx = val.indexOf('.')
  //     if (!(idx === -1 || idx === val.length - 1)) {
  //       val = val.substr(0, idx) + '.' + val.substr(idx + 1).replace(/\./g, '')
  //     }
  //     // 第一个字符如果是.号，则补充前缀0
  //     val = val.replace(/^\./g, '0.')
  //     if (typeof binding.value !== 'undefined') {
  //       // 期望保留的最大小数位数
  //       let pointKeep = 0
  //       if (
  //         typeof binding.value === 'string' ||
  //         typeof binding.value === 'number'
  //       ) {
  //         pointKeep = parseInt(binding.value)
  //       }
  //       if (!isNaN(pointKeep)) {
  //         if (!Number.isInteger(pointKeep) || pointKeep < 0) {
  //           pointKeep = 0
  //         }
  //         const str = '^(\\d+)\\.(\\d{' + pointKeep + '}).*$'
  //         const reg = new RegExp(str)
  //         if (pointKeep === 0) {
  //           // 不需要小数点
  //           val = val.replace(reg, '$1')
  //         } else {
  //           // 通过正则保留小数点后指定的位数
  //           val = val.replace(reg, '$1.$2')
  //         }
  //       }
  //     } else {
  //       val = ele.value.replace(/[^\d]/g, '')
  //     }
  //     ele.value = val
  //   }
  // }
  // // 支持负数
  // function handle3() {
  //   let val = ele.value
  //   // modifiers为修饰符对象，传入了float，则其float属性为true
  //   if (binding.modifiers.float) {
  //     // 清除"数字"和"."以及"-"以外的字符
  //     val = val.replace(/[^\-\d.]/g, '')
  //     // 只保留第一个“点”号, 清除多余的
  //     const idx = val.indexOf('.')
  //     if (!(idx === -1 || idx === val.length - 1)) {
  //       val = val.substr(0, idx) + '.' + val.substr(idx + 1).replace(/\./g, '')
  //     }
  //     // 只保留首位的负号, 清除多余的
  //     if (val.length > 1) {
  //       val = val.charAt(0) + val.substr(1).replace(/-/g, '')
  //     }
  //     // 将 '-.' 替换成 '-0.'
  //     val = val.replace(/^\./g, '0.').replace(/^-\./, '-0.')
  //     if (typeof binding.value !== 'undefined') {
  //       // 期望保留的最大小数位数
  //       let pointKeep = 0
  //       if (
  //         typeof binding.value === 'string' ||
  //         typeof binding.value === 'number'
  //       ) {
  //         pointKeep = parseInt(binding.value)
  //       }
  //       if (!isNaN(pointKeep)) {
  //         if (!Number.isInteger(pointKeep) || pointKeep < 0) {
  //           pointKeep = 0
  //         }
  //         // 增加'-'号的支持
  //         const str = '^(\\-)*(\\d+)\\.(\\d{' + pointKeep + '}).*$'
  //         const reg = new RegExp(str)
  //         if (pointKeep === 0) {
  //           // 不需要小数点
  //           val = val.replace(reg, '$1$2')
  //         } else {
  //           // 通过正则保留小数点后指定的位数
  //           val = val.replace(reg, '$1$2.$3')
  //         }
  //       }
  //     } else {
  //       val = ele.value.replace(/[^\-\d]/g, '').replace(/^(-)*(\d*)$/, '$1$2')
  //     }
  //     ele.value = val
  //   }
  // }
  // // 支持输入的最大值和最小值
  // function handle4() {
  //   let val = ele.value
  //   // modifiers为修饰符对象，传入了float，则其float属性为true
  //   if (binding.modifiers.float) {
  //     // 清除"数字"和"."以及"-"以外的字符
  //     val = val.replace(/[^\-\d.]/g, '')
  //     // 只保留第一个“点”号, 清除多余的
  //     const idx = val.indexOf('.')
  //     if (!(idx === -1 || idx === val.length - 1)) {
  //       val = val.substr(0, idx) + '.' + val.substr(idx + 1).replace(/\./g, '')
  //     }
  //     // 只保留首位的负号, 清除多余的
  //     if (val.length > 1) {
  //       val = val.charAt(0) + val.substr(1).replace(/-/g, '')
  //     }
  //     // 将 '-.' 替换成 '-0.'
  //     val = val.replace(/^\./g, '0.').replace(/^-\./, '-0.')
  //     if (typeof binding.value !== 'undefined') {
  //       // 期望保留的最大小数位数
  //       let pointKeep = 0
  //       if (
  //         typeof binding.value === 'string' ||
  //         typeof binding.value === 'number'
  //       ) {
  //         pointKeep = parseInt(binding.value)
  //       } else if (typeof binding.value === 'object') {
  //         // 支持新的小数点保留位配置
  //         pointKeep = binding.value.decimal
  //       }
  //       if (!isNaN(pointKeep)) {
  //         if (!Number.isInteger(pointKeep) || pointKeep < 0) {
  //           pointKeep = 0
  //         }
  //         // 增加'-'号的支持
  //         const str = '^(\\-)*(\\d+)\\.(\\d{' + pointKeep + '}).*$'
  //         const reg = new RegExp(str)
  //         if (pointKeep === 0) {
  //           // 不需要小数点
  //           val = val.replace(reg, '$1$2')
  //         } else {
  //           // 通过正则保留小数点后指定的位数
  //           val = val.replace(reg, '$1$2.$3')
  //         }
  //       }
  //     } else {
  //       val = ele.value.replace(/[^\-\d]/g, '').replace(/^(-)*(\d*)$/, '$1$2')
  //     }
  //     if (val !== '' && typeof binding.value === 'object') {
  //       let { min, max } = binding.value
  //       min = parseFloat(min)
  //       max = parseFloat(max)
  //       if (!isNaN(min)) {
  //         if (min >= 0) {
  //           // 不能是负数
  //           val = val.replace('-', '')
  //         }
  //         if (parseFloat(val) < min) {
  //           val = min
  //         }
  //       }
  //       if (!isNaN(max)) {
  //         if (parseFloat(val) > max) {
  //           val = max
  //         }
  //       }
  //     }
  //     ele.value = val
  //   }
  // }
  return handle1
}
const numberInput = {
  bind(el, binding, vnode) {
    const ele = el.tagName === 'INPUT' ? el : el.querySelector('input')
    ele.addEventListener('input', onInput(el, ele, binding, vnode), false)
  }
}

Vue.directive('number-input', numberInput)
