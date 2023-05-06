/*
 * @Author: ailoman
 * @Date: 2023-05-06 10:55:36
 * @LastEditTime: 2023-05-06 10:56:37
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/helper/localStorage.ts
 */
export const localStorageGetItem = (key: string) => window.localStorage.getItem(key)
export const localStorageSetItem = (key: string, value: string) => window.localStorage.setItem(key, value)