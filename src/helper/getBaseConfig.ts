/*
 * @Author: ailoman
 * @Date: 2022-02-11 09:11:08
 * @LastEditTime: 2023-05-06 11:16:28
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/helper/getBaseConfig.ts
 */

import { RTE_ENUM } from '@/constant'

// 获取当前host
const getCurrentHost = () => window.location.host.toLowerCase()

const isLocal = () => getCurrentHost().includes('localhost')
const isDev = () => getCurrentHost().includes('.dev.')
const isTest = () => getCurrentHost().includes('.test.')
const isOnTest = () => getCurrentHost().includes('.ontest.')
const isProd = () => {
  const currentHost = getCurrentHost()
  return (
    currentHost.includes('.prod.') ||
    currentHost.includes('.prod-devops.') ||
    currentHost.includes('li.chj.cloud')
  )
}

const isBothDev = () => isDev() || isLocal()

// 获取当前运行环境 （RTE: Runtime Environment）
const getCurrentRTE = () => {
  let currentRTE = RTE_ENUM.LOCAL
  if (isBothDev()) {
    return RTE_ENUM.DEV
  } else if (isTest()) {
    return RTE_ENUM.TEST
  } else if (isOnTest()) {
    return RTE_ENUM.ONTEST
  } else if (isProd()) {
    return RTE_ENUM.PROD
  }
  return currentRTE
}

// 获取当前协议
const getCurrentProtocol = () => window.location.protocol

const BASE_URL_COLLECTION: any = {
  [RTE_ENUM.DEV]: '//li.dev.k8s.chj.cloud',
  [RTE_ENUM.TEST]: '//li.test.k8s.chj.cloud',
  [RTE_ENUM.ONTEST]: '//li.ontest.k8s.chj.cloud',
  [RTE_ENUM.PROD]: '//li.chj.cloud',
}

// 获取当前运行环境对应的基本url
const getBaseUrlOfCorrespondingRTE = () => BASE_URL_COLLECTION[getCurrentRTE()]

// 当前运行环境对应的url集合
const URL_COLLECTION = {
  baseURL: getCurrentProtocol() + getBaseUrlOfCorrespondingRTE(),
}

const BASE_URL = URL_COLLECTION.baseURL

export { getCurrentRTE, BASE_URL }
