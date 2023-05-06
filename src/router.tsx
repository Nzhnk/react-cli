/*
 * @Author: ailoman
 * @Date: 2023-05-06 10:47:28
 * @LastEditTime: 2023-05-06 10:49:53
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/router.tsx
 */
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/page/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
