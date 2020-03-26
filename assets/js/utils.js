/**
 * 返回时间距离现在n秒/分/时/天/月
 */
export function getFinalActivity(d1) {
  // 开始时间

  let date1 = new Date(d1);
  // 结束时间
  let date2 = new Date();
  // 时间相差毫秒数
  let dateDiff = date2.getTime() - date1.getTime();
  // 计算出相差年数
  let years = Math.floor(dateDiff / (365 * 24 * 3600 * 1000));
  // 计算出相差月数
  let months = Math.floor(dateDiff / (30 * 24 * 3600 * 1000));
  // 计算出相差星期数
  let weekdays = Math.floor(dateDiff / (7 * 24 * 3600 * 1000));
  // 计算出相差天数
  let days = Math.floor(dateDiff / (24 * 3600 * 1000));
  // 计算出小时数
  let residue1 = dateDiff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
  let hours = Math.floor(residue1 / (3600 * 1000));
  // 计算相差分钟数
  let residue2 = residue1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
  let minutes = Math.floor(residue2 / (60 * 1000));
  // 计算相差秒数
  let residue3 = residue2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
  let seconds = Math.round(residue3 / 1000);
  let returnVal =
    years == 0
      ? months == 0
        ? weekdays == 0
          ? days == 0
            ? hours == 0
              ? minutes == 0
                ? seconds == 0
                  ? ""
                  : seconds + "秒"
                : minutes + "分钟"
              : hours + "小时"
            : days + "天"
          : weekdays + "个星期"
        : months + "个月"
      : years + "年";
  return returnVal;
}
/**
 * 返回时间距离现在n秒/分/时/天/月
 */
export function timeago(d1) {
  //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。

  var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60;

  var day = hour * 24;

  var week = day * 7;

  var halfamonth = day * 15;

  var month = day * 30;

  var now = new Date().getTime(); //获取当前时间毫秒
  var diffValue = now - dateTimeStamp; //时间差

  if (diffValue < 0) {
    return;
  }

  var minC = diffValue / minute; //计算时间差的分，时，天，周，月
  var hourC = diffValue / hour;

  var dayC = diffValue / day;

  var weekC = diffValue / week;
  var monthC = diffValue / month;

  if (minC >= 1) {
    result = " " + parseInt(minC) + "分钟前";
  } else if (hourC >= 1) {
    result = " " + parseInt(hourC) + "小时前";
  } else if (dayC >= 1) {
    result = " " + parseInt(dayC) + "天前";
  } else if (weekC >= 1) {
    result = " " + parseInt(weekC) + "周前";
  } else if (monthC >= 1) {
    result = " " + parseInt(monthC) + "月前";
  } else {
    result = "刚刚";
  }
  return result;
}
