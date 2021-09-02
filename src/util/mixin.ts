import moment, {Moment} from "moment";
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

 /**
 * 获取从给定的日期开始的未来或者过去x天的日期数组
 * @param type: 0 :是未来 1是过去
 */
export function getDateArrFromInput(currDate: Moment, x: number, type = 0): Moment[] {
  return [...new Array(x)].map((i, idx) => {
    if (type > 0) {
      return moment(currDate).subtract(x-idx-1, "days")
    }
    return moment(currDate).add(idx, "days")
  });
}