/*
 * @Author: ailoman
 * @Date: 2023-05-06 10:52:30
 * @LastEditTime: 2023-05-06 11:20:20
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/api/request.ts
 */
import { message } from 'antd'
import axios from 'axios'
import { getToken, localStorageGetItem, BASE_URL } from '@/helper'

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

request.interceptors.request.use(
  (config) => {
    const curTenantItemStr = localStorageGetItem('curTenantItem')
    const curTenantItem = JSON.parse(curTenantItemStr || '{}')
    const tenantId = curTenantItem.tenantId
    config.headers['Authorization'] = getToken()
    if (tenantId && config.headers['Authorization']) {
      config.headers['X-TENANT-ID'] = tenantId
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    if (window.checkLicloudToken && !window.checkLicloudToken()) {
      window.modalTip && window.modalTip()
      return
    }
    const errorCode = error?.response?.status || -1
    const { errors = [] } = error?.response?.data || {}
    let tip = ''
    if (errorCode === 401) {
      tip = '无效的token'
      window.authLogOut && window.authLogOut()
      return
    } else if (errorCode === 403) {
      tip = '无操作权限'
    } else {
      tip = (errors && errors[0]?.message) || error.message || 'Error'
    }
    tip && message.error(tip)
    return Promise.reject(error)
  }
)

export default request
