<template>
  <div class="hello">
    <canvas id="canvas-club" ref="canvasEl"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref  } from 'vue'
import { RainDrop } from '../util/rain'
export default defineComponent({
  setup() {
    const canvasEl = ref<HTMLCanvasElement | null>(null);

    const max = 30;
    const drops: RainDrop[] = [];

    onMounted(() => {
      const ctx:CanvasRenderingContext2D = (canvasEl.value as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
      let w = (canvasEl.value as HTMLCanvasElement).width = window.innerWidth;
      let h = (canvasEl.value as HTMLCanvasElement).height = window.innerHeight;
      const clearColor = 'rgba(0, 0, 0, .1)';

      for (let i = 0; i < max; i++) {
        setTimeout(() => {
          const rainDrop = new RainDrop(w, h);
          drops.push(rainDrop);
        }, i*200)
      }

      const anim = () => {
        (ctx as CanvasRenderingContext2D ).fillStyle = clearColor;//每一帧都填充背景色
        (ctx as CanvasRenderingContext2D ).fillRect(0,0,w,h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
        for (let drop of drops) {
          drop.draw((ctx as CanvasRenderingContext2D ));//绘制雨滴
        }
        requestAnimationFrame(anim);//控制动画帧
      }


      const resize = () => {
        w = (canvasEl.value as HTMLCanvasElement).width = window.innerWidth;
        h = (canvasEl.value as HTMLCanvasElement).height = window.innerHeight;
      }


      window.addEventListener("resize", resize);
      //启动动画
      anim();
    });

    return {
      canvasEl
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
