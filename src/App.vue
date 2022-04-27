<!-- <script lang="ts" setup>
import SlideLeft from '@/components/SlideLeft/SlideLeft.vue'
</script> -->
<script>
export default {
  data() {
    return {
      foo: 'i love you'
    }
  },
  mounted() {
    this.foo = 'i love china'
    console.log('mounted')
  }
}
</script>
<template>
  <div class="top-container">
    <!-- <SlideLeft></SlideLeft> -->
    <h1>{{foo}}</h1>
    <div class="top-right-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

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
