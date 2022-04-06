<script lang="ts" setup>
import LazyLoad from '@/components/LazyLoad/LazyLoad.vue';
</script>

<template>
  <div class="container">
    <div class="placeholder"></div>
    <LazyLoad :src="require('@/assets/logo.png')"></LazyLoad> 
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100vh;
  background-color: aquamarine;
}
.placeholder {
  height: 100vh;
}
</style>