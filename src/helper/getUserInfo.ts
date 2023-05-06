/*
 * @Author: ailoman
 * @Date: 2022-11-17 15:19:17
 * @LastEditTime: 2023-03-06 10:31:49
 * @LastEditors: ailoman
 * @FilePath: /licloud-app-manage/src/utils/getUserInfo.ts
 */

// 获取当前用户信息
export const getCurrentUserInfo = () => JSON.parse(localStorage.getItem('licloud::userInfo') || '{}')

// 获取当前用户姓名
export const getCurrentUserName = () => getCurrentUserInfo()?.oaname || ''
