<template>
  <div class="calander-box">
    <div class="calander-head">
      <span class="arrow fontSizeLLL whiteFontColor" @click="changeMonth(0)">&lt;</span>
      <div class="flexColumnBetweenCenter">
        <span class="fontSizeLL whiteFontColor">{{currSelect.month()+1}}月</span>
        <div class="flexRowAlignItemCenter">
          <span class="arrow fontSizeLLL whiteFontColor" @click="changeYear(0)">&lt;</span>
          <span class="fontSizeL whiteFontColor  marginLeft marginRight">{{currSelect.year()}}</span>
          <span class="arrow fontSizeLLL whiteFontColor" @click="changeYear(1)">&gt;</span>
        </div>
      </div>
      <span class="arrow fontSizeLLL whiteFontColor" @click="changeMonth(1)">&gt;</span>
    </div>
    <div class="calander-week">
      <span>一</span>
      <span>二</span>
      <span>三</span>
      <span>四</span>
      <span>五</span>
      <span>六</span>
      <span>日</span>
    </div>
    <div class="calander-days">
      <span
        class="day-span grayFontColor"
        v-for="(preday, pi) in preDays"
        :key="pi"
        @click="onClickDay(preday)"
      >
        {{preday.date()}}
      </span>
      <span
        class="day-span"
        :class="day.isSame(currSelect, 'day') ? 'activeDay' : ''"
        v-for="(day, di) in days"
        :key="di"
        @click="onClickDay(day)"
      >
        {{day.date()}}
      </span>
      <span
        class="day-span grayFontColor"
        v-for="(nextday, ni) in nextDays"
        :key="ni"
        @click="onClickDay(nextday)"
      >
        {{nextday.date()}}
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./DatePicker.ts"></script>

<style lang="less" scoped>
.calander-box {
  width: 50%;
  border: 1px solid @borderColor;
  .calander-head {
    height: 80px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    background-color: @primary-light;
    .arrow {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .calander-week {
    background-color:#ddd;
    display: flex;
    &>span {
      width: 14%;
      text-align: center;
      padding: 15px 0;
    }
  }
  .calander-days {
    display: flex;
    flex-wrap: wrap;
    .day-span {
      width: 14%;
      text-align: center;
      padding: 15px 0;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: @primary-color;
        color: white;
        cursor: pointer;
      }
    }
  }
  .activeDay {
    background-color: @primary-color;
    color: white;
  }
}
</style>