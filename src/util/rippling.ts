import { random } from './mixin'

export class Rippling {
 w = 2;//椭圆形涟漪宽
 h = 1;//椭圆涟漪高
 vw = 3;//宽度增长速度
 vh = 1;//高度增长速度
 a = 1;//透明度
 va = .96;//涟漪消失的渐变速度

  constructor (sw: number, sh:number) {
    this.init();
  }

  init () {
    this.w = 2;//椭圆形涟漪宽
    this.h = 1;//椭圆涟漪高
    this.vw = 3;//宽度增长速度
    this.vh = 1;//高度增长速度
    this.a = 1;//透明度
    this.va = .96;//涟漪消失的渐变速度
  }

  draw (ctx: any, x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y - this.h / 2);
    //绘制右弧线
    ctx.bezierCurveTo(
      x + this.w / 2, y - this.h / 2,
      x + this.w / 2, y + this.h / 2,
      x, y + this.h / 2);
    //绘制左弧线
    ctx.bezierCurveTo(
        x - this.w / 2, y + this.h / 2,
        x - this.w / 2, y - this.h / 2,
        x, y - this.h / 2);
    
    ctx.strokeStyle = 'hsla(180, 100%, 50%, '+this.a+')';
    ctx.stroke();
    ctx.closePath();
  }

  update () {
    if(this.a > .03){
      this.w += this.vw;//宽度增长
      this.h += this.vh;//高度增长
      if(this.w > 100){
        this.a *= this.va;//当宽度超过100，涟漪逐渐变淡消失
        this.vw *= .98;//宽度增长变缓慢
        this.vh *= .98;//高度增长变缓慢
      }
    } else {
      return true
    }
  }
}