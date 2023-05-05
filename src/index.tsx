/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:04:23
 * @LastEditTime: 2023-05-05 18:00:40
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/index.tsx
 */
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '@/features';

import reportWebVitals from './reportWebVitals';


import './reset.css';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';

let root: ReactDOM.Root | null

function render(props: any) {
  const { container } = props || {}
  root = createRoot(container ? container.querySelector('#root') : document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <ConfigProvider
        autoInsertSpaceInButton={false}
        theme={{
          token: {
            colorPrimary: '#00665F',
          },
        }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  )
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 如果是单独启动的子文件，保证仍能正常运行
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  if (root) {
    root.unmount()
    root = null
  }
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props', props)
}