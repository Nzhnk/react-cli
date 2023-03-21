/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:34:51
 * @LastEditTime: 2023-03-21 11:17:14
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/page/Home/index.tsx
 */
import Counter from '@/features/counter';
import React from 'react';
import styles from './index.module.scss';

interface IProps {}

const Home: React.FC<IProps> = (props) => {
  return <div className={styles.container}>
    <Counter />
  </div>;
};

export default Home;