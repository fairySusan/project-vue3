import {defineComponent, ref} from 'vue'

interface MenuI {
  name: string;
  path: string
}

export default defineComponent({
  setup() {
    const menus = ref<MenuI[]>([
      {
        name: '日历',
        path: '/datePicker'
      },
      {
        name: '下雨动画',
        path: '/rain'
      },
      {
        name: '通知',
        path: '/notification'
      }
    ]);

    return {
      menus
    }
  }
})