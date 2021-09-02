import {createRouter, createWebHashHistory } from 'vue-router';
import DatePicker from '@/components/DatePicker/DatePicker.vue'

const routes = [
  {
    path: '/datePicker',
    component: DatePicker
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})