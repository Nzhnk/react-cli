/*
 * @Author: ailoman
 * @Date: 2022-02-24 10:58:42
 * @LastEditTime: 2023-02-24 15:20:00
 * @LastEditors: ailoman
 * @FilePath: /licloud-app-manage/src/hooks/useUrlSearchParams.ts
 */
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import QueryString from 'qs'

/**
 *  获取 url 中 search 参数 hooks （即 url中 ？后面的参数）
 */
const useUrlSearchParams = () => {
  const { search } = useLocation()
  const params = useCallback(() => {
    const filterSearch = search?.replace(/^\?/, '')
    return QueryString.parse(filterSearch)
  }, [search])
  return params()
}
export default useUrlSearchParams
