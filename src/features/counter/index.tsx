/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:37:45
 * @LastEditTime: 2023-05-05 17:09:58
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/features/counter/index.tsx
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { RootState } from '../store';
import { decrement, increment } from './counterSlice';
import styles from './index.module.scss';

interface IProps {}

const Counter: React.FC<IProps> = (props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div>
        <Button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <span>{count}</span>
        <Button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
