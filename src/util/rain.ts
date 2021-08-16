import { random } from './mixin'
import { Rippling } from './rippling'
// 雨滴
export class RainDrop {
  w = 0;
  h = 0;
  x = 0;//雨滴的位置x
  y = 0;//雨滴的位置y
  color = 'hsl(180, 100%, 50%)';
  vy = random(4, 5);//雨滴下落速度
  hit = 0;//下落的最大值
  size = 2;//长方形宽度
  rippling: Rippling | null = null

  constructor (w: number, h: number, ) {
    this.w = w;
    this.h = h;
    this.rippling = new Rippling(this.w, this.h);
    this.init();
  }

  init () {
    this.x =  random(0, this.w);//雨滴的位置x
    this.y = 0;
    this.hit = random(this.h * .8, this.h * .9);//下落的最大值
    this.vy = random(4, 5);//雨滴下落速度
    (this.rippling as Rippling).init()
  }

  draw (ctx: any){
    if (this.y > this.hit) {
      (this.rippling as Rippling).draw(ctx, this.x, this.y)
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size * 5);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
    }
    this.update();//更新位置
  }

  update (){
    if (this.y < this.hit){
      this.y += this.vy;//未达到底部，增加雨滴y坐标
    } else {
      if ((this.rippling as Rippling).update()) {
        this.init()
      }
    }
  }
}