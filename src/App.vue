<template>
  <div class="top-container">
    <SlideLeft></SlideLeft>
    <div class="top-right-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideLeft from '@/components/SlideLeft/SlideLeft.vue'
export default defineComponent({
  components: {
    SlideLeft
  },
})
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
.top-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.top-right-panel {
  flex: 1;
  width: 100px;
  padding: 10px;
}
</style>
