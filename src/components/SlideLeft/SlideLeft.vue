<template>
  <div class="c-slide-left">
    <router-link v-for="menu in menus" :to="menu.path" :key="menu.path" class="c-menu-item">
      {{menu.name}}
    </router-link>
  </div>
</template>

<script lang="ts" src="./SlideLeft.ts"></script>

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

