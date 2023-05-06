/*
 * @Author: ailoman
 * @Date: 2023-03-01 11:00:35
 * @LastEditTime: 2023-05-05 16:58:52
 * @LastEditors: ailoman
 * @FilePath: /licloud-app-manage/src/utils/timeformat.ts
 */
import moment from 'moment'

// 判断是否需要补零
const isNeedZeroBeFilled = (num: number) => {
  return Number(num) < 10 ? '0' + num : num
}

// 1天以上显示天数
const getMoreThanOneDay = (sec: number) => {
  const duration = moment.duration(sec, 'seconds')
  return duration.days() > 0 ? `${isNeedZeroBeFilled(duration.days())}天` : ''
}

// 1天以下显示小时数
const getMoreThanOneHour = (sec: number) => {
  const duration = moment.duration(sec, 'seconds')
  return duration.hours() > 0 ? `${isNeedZeroBeFilled(duration.hours())}小时` : ''
}

// 1小时以下显示分钟数
const getMoreThanOneMinute = (sec: number) => {
  const duration = moment.duration(sec, 'seconds')
  return duration.minutes() > 0 ? `${isNeedZeroBeFilled(duration.minutes())}分` : ''
}

// 1分钟以下显示秒数
const getMoreThanOneSecond = (sec: number) => {
  const duration = moment.duration(sec, 'seconds')
  return isNeedZeroBeFilled(duration.seconds()) + '秒'
}

export const formatTime = (sec: number) => {
  const secNum = Number(sec)
  return `${getMoreThanOneDay(secNum)}${getMoreThanOneHour(secNum)}${getMoreThanOneMinute(
    secNum
  )}${getMoreThanOneSecond(secNum)}`
}
