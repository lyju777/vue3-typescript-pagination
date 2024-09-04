<template>
 <BasicLayout>
  <div class="navigation">
    <div class="navigation__sub-menu">
      <div class="navigation__sub-menu__button-box"></div>
    </div>

    <div class="navigation__sub-menu">
      <span class="navigation__sub-menu__title">Recruitment</span>
      <div class="navigation__sub-menu__button-box"></div>
    </div>

    <div class="navigation__sub-menu">
      <span class="navigation__sub-menu__title">Organization</span>
      <div class="navigation__sub-menu__button-box"></div>
    </div>
  </div>
  
 </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '../atoms/layout/BasicLayout.vue';


</script>

<style lang="scss" scoped>
  .navigation{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    gap:40px;

    &__sub-menu{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      width: 100%;

      &__title {
        margin-bottom:12px;

        font-family: 'SUITE-Regular';
        color: $color-white-000;
      }
      &__button-box{
        width: calc(100% - 24px);
      }
    }
  }
</style>