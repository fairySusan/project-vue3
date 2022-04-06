<script lang="ts" setup>
import {ref} from 'vue'
import {MenuI} from './Type'
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
  },
  {
    name: '懒加载',
    path: '/lazyLoad'
  }
]);
</script>

<template>
  <div class="c-slide-left">
    <router-link v-for="menu in menus" :to="menu.path" :key="menu.path" class="c-menu-item">
      {{menu.name}}
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.c-slide-left {
  width: 200px;
  background: white;
  overflow-y: auto;
  border-right: 1px solid @primary-color;
  display: flex;
  flex-direction: column;
  .scrollBarStyle();
  .c-menu-item {
    color: @darkFontColor;
    text-decoration: none;
    border-bottom: 1px solid  @borderColor;
    padding: 10px;
  }
}
</style>

