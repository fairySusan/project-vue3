import {createRouter, createWebHashHistory } from 'vue-router';
import DatePicker from '@/components/DatePicker/DatePicker.vue';
import Rain from '@/components/RainAni/RainAni.vue';
import Notification from '@/components/Notification/Notification.vue'

const routes = [
  {
    path: '/datePicker',
    component: DatePicker
  },
  {
    path: '/rain',
    component: Rain
  },
  {
    path: '/notification',
    component: Notification
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})