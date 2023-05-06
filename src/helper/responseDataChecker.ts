/*
 * @Author: ailoman
 * @Date: 2023-03-08 15:42:18
 * @LastEditTime: 2023-03-08 15:45:14
 * @LastEditors: ailoman
 * @FilePath: /licloud-app-manage/src/utils/responseDataChecker.ts
 */

import { isBoolean, isObject } from 'lodash'

// 验证策略
export const RESPONSE_DATA_CHECKER = {
  ARRAY_CHECK: (data: any) => {
    if (!Array.isArray(data)) {
      throw new Error('response data is not an array!')
    }
  },
  OBJECT_CHECK: (data: any) => {
    if (!isObject(data)) {
      throw new Error('response data is not an object!')
    }
  },
  STRING_CHECK: (data: any) => {
    if (typeof data !== 'string') {
      throw new Error('response data is not a string!')
    }
  },
  NUMBER_CHECK: (data: any) => {
    if (isNaN(data)) {
      throw new Error('response data is not a number!')
    }
  },
  BOOLEAN_CHECK: (data: any) => {
    if (!isBoolean(data)) {
      throw new Error('response data is not a boolean value!')
    }
  }
}
