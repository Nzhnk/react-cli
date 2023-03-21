/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:38:27
 * @LastEditTime: 2023-03-21 11:02:54
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/features/counter/counterSlice.ts
 */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 每个case reducer函数都会生成一个action creator
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
