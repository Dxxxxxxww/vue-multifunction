import axios from 'axios'
import qs from 'qs'
import store from '@/store/index'
import { Loading, Message } from 'element-ui'
import { generateExportTypeName } from './common'
import router from '@/router'

// 设置响应时间
axios.defaults.timeout = 30 * 1000
// 配置响应头
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 配置cookie
// axios.defaults.withCredentials = true
let loadingInstance
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // console.log('请求拦截器：', config)
    /* if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        } */
    const token = store.state.token
    token && (config.headers.Authorization = token)

    return config
  },
  err => {
    // loadingInstance.close();
    console.error('请求拦截器[error]：', err)
    Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    // console.log('响应拦截器：',res)
    const taskDetailUrl = '/manage/task/showTaskDetail'
    const appDetailUrl = '/manage/appPkg/showAppPkgByPage'

    const configUrl = res.config.url
    if (res.data.code) {
      switch (res.data.code) {
        case '0':
          if (configUrl === taskDetailUrl || configUrl === appDetailUrl) {
            break
          }
          Message.warning(res.data.message)
          break
        case '1':
          return res // 请求响应成功
        case '2':
          Message.warning(res.data.message)
          router.push('/resetPwd')
          break
        case '3':
          Message.warning(res.data.message)
          break
        case '5':
          Message.warning(res.data.message)
          router.push('/login')
          break
        case '6':
          Message.warning(res.data.message)
          router.push('/login')
          break
        case '7':
          Message.warning(res.data.message)
          break
        case '001':
          Message.warning(res.data.message)
          router.push('/login')
          break
      }
    } else {
      if (res.status === 200) {
        return res
      }
    }
  },
  err => {
    console.error('响应拦截器[error]：', err)
    Message.error('请求错误，请稍后重试！')
    return Promise.reject(err)
  }
)

// 发送请求post
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
// 发送请求get
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
// 上传文件
export function uploadFile(url, params) {
  return new Promise((resolve, reject) => {
    var formdata = new FormData()
    for (var attr in params) {
      formdata.append(attr, params[attr])
    }
    axios({
      method: 'post',
      url: url,
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
// 下载文件
export function downloadFile(url, params, fileName) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params,
      responseType: 'blob'
    })
      .then(res => {
        /* 获取到接口功能的分类 */
        const exportType = res.config.url.split('/')[2]
        if (!res) {
          return
        }
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        console.log(fileName)
        if (fileName) {
          link.setAttribute('download', fileName) // 设置导出表格名称
        } else {
          link.setAttribute('download', generateExportTypeName(exportType)) // 设置导出表格名称
        }
        document.body.appendChild(link)
        link.click()
      })
      .catch(err => {
        console.log(err)
      })
  })
}
