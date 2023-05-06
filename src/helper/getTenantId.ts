/*
 * @Author: ailoman
 * @Date: 2022-11-17 15:19:17
 * @LastEditTime: 2023-05-06 13:28:25
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/helper/getTenantId.ts
 */
import { DEFAULT_AVATAR } from '@/constant'
import { localStorageGetItem } from './localStorage'
export const getLocalStorageTenantId = () => {
  const curTenantItem = JSON.parse(localStorageGetItem('curTenantItem') || '{}')
  return curTenantItem
}

export const getCurTenantId = () => getLocalStorageTenantId()?.tenantId || ''

export const getCnName = (username: string) => {
  try {
    const tenantId = getCurTenantId()
    const store = window?.globalDataStore || {}
    // console.log('🚀 ~ file: getCnName.ts:11 ~ getCnName ~ store', store)
    if (store[tenantId] && username) {
      return store[tenantId][username] ? store[tenantId][username].nameCn || username : username
    }
    return username
  } catch (error) {
    console.log('getCnName:', error)
    return username
  }
}

//获取当前租户下的成员
export const getCurTenantMembers = () => {
  try {
    const tenantId = getCurTenantId()
    const store = window?.globalDataStore || {}
    return store[tenantId] || {}
  } catch (error) {
    console.log('getCurTenantMembers:', error)
    return {}
  }
}

// 获取头像
export const getAvatar = (username: string) => {
  try {
    const tenantId = getCurTenantId()
    const store = window?.globalDataStore || {}
    if (store[tenantId] && username) {
      return store[tenantId][username] ? store[tenantId][username].avatar || DEFAULT_AVATAR : DEFAULT_AVATAR
    }
    return DEFAULT_AVATAR
  } catch (error) {
    console.log('getAvatar:', error)
    return DEFAULT_AVATAR
  }
}
