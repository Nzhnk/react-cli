/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:37:02
 * @LastEditTime: 2023-03-21 11:03:58
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/features/store.ts
 */

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 从store中推断出`RootState`和`AppDispatch`类型
export type RootState = ReturnType<typeof store.getState>;

// 从store中推断出`AppDispatch`类型
export type AppDispatch = typeof store.dispatch;
