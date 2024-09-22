<template>
  <div class="notice">
    <div class="notice__header">
      <div class="notice__header__total">
        <span class="count">142</span>
        <span class="label">Candidates</span>
      </div>
      <div class="notice__header__info">
        <div class="item">
          <span class="item__top">ALL</span>
          <span class="item__bottom">Best In</span>
        </div>
        <div class="item">
          <span class="item__top">ALL</span>
          <span class="item__bottom">Best In</span>
        </div>
        <div class="item">
          <span class="item__top">Default</span>
          <span class="item__bottom">Sort Results</span>
        </div>
      </div>
    </div>
    <div class="notice__body">
      <div class="notice__body__column">
        <span class="label">Name</span>
        <span class="label">Resume Score</span>
        <span class="label">Skill Match</span>
        <span class="label">Skill</span>
      </div>
      <div class="notice__body__list-box">
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NoticeList from '@/components/mocules/List.vue';
</script>

<style lang="scss" scoped>
.notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% - 36px);
  height: 100%;

  padding: 0 12px 0 24px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding-bottom: 12px;

    border-bottom: 1px solid $color-white-200;

    &__total {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .count {
        font-family: "MBC1961GulimM";
        font-size: 18px;
      }

      .label {
        font-family: "SUITE-Regular";
        color: $color-white-200;
      }
    }
    &__info {
      display: flex;
      align-items: center;

      gap: 40px;

      .item {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        &__top {
          font-family: "MBC1961GulimM";
          color: $color-blue-000;
        }
        &__bottom {
          font-family: "SUITE-Regular";
          color: $color-white-200;
        }
      }
    }
  }
  &__body {
    width: 100%;
    height: calc(100% - 92px);

    &__column {
      display: flex;
      align-items: center;

      width: 100%;
      height: 60px;

      .label {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 25%;
        height: 100%;

        margin-left: 16px;

        font-weight: 300;
        color: $color-white-200;
      }
    }
    &__list-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      width: 100%;
      height: calc(100% - 110px);

      gap: 12px;

      overflow-y: scroll;
    }
  }
}
</style>
