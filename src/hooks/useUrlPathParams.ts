/*
 * @Author: ailoman
 * @Date: 2022-02-24 10:58:42
 * @LastEditTime: 2023-05-06 11:22:47
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/hooks/useUrlPathParams.ts
 */
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

/**
 *  获取 url 中 path 参数 hooks （即 url中 / 后面的参数）
 */
const useUrlPathParams = () => {
  const pathParams = useParams()
  const params = useCallback(() => {
    return pathParams
  }, [pathParams])
  return params()
}
export default useUrlPathParams
