<script lang="ts" setup>
import { defineProps, onMounted } from "@vue/runtime-core";
import { ref } from "vue";

const props = defineProps<{
  src:string
}>()
const selfSrc = ref('')
const viewHeight = ref(0)
const lazyLoadRef = ref<HTMLDivElement | null>(null)
const isFinished = ref(false)

onMounted(() => {
  viewHeight.value = window.innerHeight || document.documentElement.clientHeight;
  window.addEventListener('scroll', scrollHandle)
})

const scrollHandle = () => {
  if (lazyLoadRef.value) {
    let distance = viewHeight.value - lazyLoadRef.value.getBoundingClientRect().top
    if (distance >= 0) {
      selfSrc.value = props.src;
      window.removeEventListener('scroll', scrollHandle)
    }
  }
}

const loadImage = () => {
  isFinished.value = true
}
</script>

<template>
  <img :src="selfSrc" v-if="selfSrc" v-show="isFinished" class="lazyLoadImg" @load="loadImage">  
  <div v-else-if="!isFinished" class="lazyLoadContainer" ref="lazyLoadRef">
    <div class="lazy-load-img-content"><div class="loading"></div></div>
  </div>
</template>

<style lang="less" scoped>
.lazyLoadContainer {
  display: inline-block;
  width: 600px;
  height: 350px;
  background-color: #eee;
  color: #aaa;
}
.lazy-load-img-content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lazyLoadImg {

}
.loading{
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  border: 3px solid #ddd;
  border-bottom-color: transparent;
  height: 25px;
  width: 25px;
  background: transparent !important;
  display: inline-block;
  -webkit-animation: loadingRotate 0.75s 0s linear infinite;
  animation: loadingRotate 0.75s 0s linear infinite;
}
@keyframes loadingRotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); 
  }
}
</style>

