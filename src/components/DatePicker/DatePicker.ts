import { defineComponent, onMounted, ref  } from 'vue'
import moment,{Moment} from 'moment';
import { useComputedDate } from './composables/useComputedDate'

enum ChangeTypeEnum {
  'pre',
  'next'
}

const DatePicker =  defineComponent({
  setup() {

    const currSelect = ref<Moment>(moment());

    const {
      preDays,
      days,
      nextDays,
    } = useComputedDate(currSelect);

    return {
      preDays,
      days,
      nextDays,
      currSelect,
      useComputedDate
    }
  },
  methods: {
    onClickDay(day: Moment) {
      this.currSelect = day
    },
    changeMonth(type: ChangeTypeEnum) {
      if (type === ChangeTypeEnum['pre']) {
        this.currSelect = moment(this.currSelect).subtract(1, 'months');
      } else {
        this.currSelect = moment(this.currSelect).add(1, 'months')
      }
    },
    changeYear(type: ChangeTypeEnum) {
      if (type === ChangeTypeEnum['pre']) {
        this.currSelect = moment(this.currSelect).subtract(1, 'years')
      } else {
        this.currSelect = moment(this.currSelect).add(1, 'years')
      }
    }
  }
})

export default DatePicker