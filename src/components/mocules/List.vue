<template>
  <div class="list">
    <div class="list__avatar">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" class="list__avatar__image" />
      <div class="list__avatar__text-box">
        <span class="name">{{data.userName}}</span>
        <span class="duty">{{ data.userRole }}</span>
      </div>
    </div>
    <div class="list__item">
      <BarChart :data="data.userResumScore"/>
    </div>
    <div class="list__item">
      <BarChart :data="data.userSkillMatch" />
    </div>
    <div class="list__item">
      <div v-if="data.userSkill === 'Senior'" class="list__item__chip">{{data.userSkill}}</div>
      <div v-if="data.userSkill === 'Junior'" class="list__item__chip junior">{{data.userSkill}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BarChart from '@components/atoms/chart/BarChart.vue';
import { toRefs } from 'vue';

interface List {
  userName: string;
  userRole: string;
  userResumScore: number;
  userSkillMatch: number;
  userSkill: string;
}

interface Props {
  data: List
}

const props=  defineProps<Props>();
const {data} = toRefs(props);
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;

  width: calc(100% - 40px);
  height: 72px;
  min-height: 76px;

  padding: 0 16px;
  gap: 8px;

  background-color: rgba($color-white-200, 0.1);
  border-radius: 16px;

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 25%;

    gap: 8px;

    &__image {
      width: 44px;
      height: 44px;

      border-radius: 50%;
      border: 1px solid rgba($color-white-200, 0.3);
    }
    &__text-box{
      display: flex;
      flex-direction: column;

      gap: 4px;

      .name{
        color: $color-black-900;
      }

      .duty{
        font-size: 14px;
        font-weight: 300;
        color: $color-white-200;
      }
    }
  }
  &__item{
    width: 25%;

    &__chip{
      display: flex;
      align-items: center;
      justify-content: center;

      width: 60px;
      height: 12px;

      padding: 8px;

      color: $color-blue-000;
      background-color: rgba($color-blue-000, 0.1);
      border-radius: 12px;

      &.junior {
        color: orange;
        background-color: rgba(orange, 0.1);
      }
    }
  }
}
</style>
