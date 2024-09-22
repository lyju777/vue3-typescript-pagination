<template>
  <div class="bar-chart">
    <div class="bar-chart__container">
      <sapn class="bar-chart__container__value">89%</sapn>
      <div class="bar-chart__container__base">
        <div class="guage"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bar-chart{
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;

  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    gap: 4px;

    &__value{
      font-size: 16px;
    }
    &__base{
      position: relative;

      width: 100%;
      height: 12px;

      background-color: rgba($color-white-200, 0.3);
      border-radius: 10px;

      .guage{
        position: absolute;

        width: 70%;

        height: 12px;
        background-color: $color-green-000;
        border-radius: 10px;
      }
    }
  }
}
</style>
