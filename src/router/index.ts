import {createRouter, createWebHashHistory } from 'vue-router';
const DatePicker = () => import('@/components/DatePicker/DatePicker.vue');
const Rain = () => import('@/components/RainAni/RainAni.vue');
const Notification = () => import('@/components/Notification/Notification.vue')
const LazyLoadDemo = () => import('@/views/LazyLoadDemo.vue')

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
  },
  {
    path: '/lazyLoad',
    component: LazyLoadDemo
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})