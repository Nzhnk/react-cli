import { localStorageGetItem } from "./localStorage"

/*
 * @Author: ailoman
 * @Date: 2023-05-06 10:58:22
 * @LastEditTime: 2023-05-06 11:06:07
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/helper/getToken.ts
 */
export const getToken = () => {
  let res: string = ''
  try {
    if (!window?.audience) {
      return 'Bearer ' + res
    }
    const tokenStr: any = localStorageGetItem(
      `@@idaasjs@@::${window.audience}::access_token`
    )
    // 下面这行代码别删除
    // const tokenStr: any = window.localStorage.getItem(`@@idaasjs@@::jIfOD2sWV0SUey4gISJgP::access_token`)
    const tokenObj = JSON.parse(tokenStr)
    res = tokenObj?.body?.raw || localStorageGetItem(`licloud::token`)
  } catch (error) {
    res = localStorageGetItem(`licloud::token`) || ''
  }
  return 'Bearer ' + res
}
