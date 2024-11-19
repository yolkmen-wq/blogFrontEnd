import dayjs from "dayjs";
/**
 * 格式化时间为文字：如10分钟前
 * @param {*} time 时间字符串或者时间戳
 * @param {*} isTimeStamp 是否为时间戳格式
 */
export const formatDateToText = (
  time: string | number,
  isTimeStamp = false
) => {
  let timeString = "";
  if (time) {
    let intervalTime = 0;
    if (!isTimeStamp) {
      let date = dayjs(time as string).format("YYYY-MM-DD HH:mm:ss");
      intervalTime = Math.floor(
        (Date.now() - Date.parse(date as string)) / 1000
      );
    } else {
      intervalTime = Math.floor(Date.now() / 1000) - (time as number);
    }
    if (intervalTime < 60) {
      timeString = "1分钟前";
    } else if (intervalTime >= 60 && intervalTime < 3600) {
      timeString = Math.floor(intervalTime / 60) + "分钟前";
    } else if (intervalTime >= 3600 && intervalTime < 3600 * 24) {
      timeString = Math.floor(intervalTime / 3600) + "小时前";
    } else if (intervalTime >= 3600 * 24 && intervalTime < 3600 * 24 * 7) {
      timeString = Math.floor(intervalTime / (3600 * 24)) + "天前";
    } else if (intervalTime >= 3600 * 24 * 7 && intervalTime < 3600 * 24 * 30) {
      timeString = Math.floor(intervalTime / (3600 * 24 * 7)) + "周前";
    } else if (
      intervalTime >= 3600 * 24 * 30 &&
      intervalTime < 3600 * 24 * 365
    ) {
      timeString = Math.floor(intervalTime / (3600 * 24 * 30)) + "个月前";
    } else if (intervalTime >= 3600 * 24 * 365) {
      timeString = Math.floor(intervalTime / (3600 * 24 * 365)) + "年前";
    }
  } else {
    timeString = "缺少时间参数";
  }
  return timeString;
};
