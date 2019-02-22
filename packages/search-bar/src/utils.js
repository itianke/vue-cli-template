/**
 * 开始时间限制
 * @author 
 * @date   2018-11-09
 * @return {[type]}   [description]
 */
export const startTimeLimit = (limitTime, limitNow = false) => {
    return {
      disabledDate(time) {
        let curTime = time.getTime(),
          now = Date.now() - 8.64e7,
          date = new Date(limitTime),
          dateTime = date.getTime() ? date.getTime() : Infinity
        return (limitNow && curTime < now) || curTime > dateTime
      }
    }
  }
  
  /**
   * endTimeLimit
   * @author 
   * @date   2018-11-09
   * @param  time  limitTime 需要限制的开始时间
   * @param  {Boolean}  limitNow  是否限制今天
   * @return {[type]}             [description]
   */
  export const endTimeLimit = (limitTime, limitNow = false) => {
    return {
      disabledDate(time) {
        let curTime = time.getTime(),
          now = Date.now() - 8.64e7,
          date = new Date(limitTime),
          // dateTime = date.getTime() ? date.getTime() - 8.64e7 : now;
          dateTime = date.getTime()
        return (limitNow && curTime < now) || curTime <= dateTime;
      }
    }
  }