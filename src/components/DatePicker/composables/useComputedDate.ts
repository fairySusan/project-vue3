import { ref, watch,onMounted, Ref  } from 'vue'
import { getDateArrFromInput } from '@/util/mixin'
import moment,{Moment} from 'moment';


export function useComputedDate (currSelect: Ref<Moment>) {

  const total = 42

  const preDays = ref<Moment[]>([]);
  const days = ref<Moment[]>([]);
  const nextDays = ref<Moment[]>([]);


  const getDateArr = () => {
    // 当前月1号
    const currMonthFirst = moment(currSelect.value).startOf('month');
    // 上一个月的最后一天
    const lastMonthDay =  moment(currSelect.value).startOf('month').subtract(1, 'days');
    // 下个月1号
    const nextMonthDay = moment(currSelect.value).endOf('month').add(1, 'days');

    const preArr = getDateArrFromInput(lastMonthDay, lastMonthDay.weekday(), 1)
    preDays.value = preArr;
    days.value = getDateArrFromInput(currMonthFirst, moment().daysInMonth());
    const l = total-preDays.value.length - days.value.length;
    nextDays.value = getDateArrFromInput(nextMonthDay, l);

  }

  onMounted(getDateArr)

  watch(currSelect, getDateArr);

  return {
    preDays,
    days,
    nextDays,
  }
}