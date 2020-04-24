<template>
  <div></div>
</template>

<script>
import { urlParse, channelIdentify } from '@/utils/util'

export default {
  name: '',
  data() {
    return {
      wxForm: {
        extendCode: '',
        openId: ''
      },
      aliForm: {
        extendCode: '',
        openId: ''
      },
      docHeight: '',
      showHeight: ''
    }
  },
  created() {
    this.registerResizeEvent()
    this.getUrlParams()
  },
  methods: {
    getUrlParams() {
      const { extendCode, code } = urlParse()
      sessionStorage.setItem('extendCode', extendCode)

      if (!code) {
        this.channelEntry()
      } else {
        this.getOpenId()
      }
    },
    channelEntry() {
      let href = ''
      if (channelIdentify() === 'wx') {
        // redirect_uri 需要用 encodeURIComponent 编码一下
        href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
      } else if (channelIdentify() === 'ali') {
      }
    },
    getOpenId() {},
    registerResizeEvent() {
      window.onresize = () => {
        return () => {
          this.showHeight = document.body.clientHeight
        }
      }
    },
    isiOS() {
      const ua = navigator.userAgent
      const isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      return isiOS
    }
  }
}
</script>

<style scoped lang="scss"></style>
