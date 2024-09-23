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
        <NoticeList
          v-for="item in tableData"
          :key="item.userName"
          :data="item"
        />
      </div>
    </div>
    <div class="notice__footer">
      <Pagination :totalPage="totalPage" @send-event="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NoticeList from "@/components/mocules/List.vue";
import Pagination from "@/components/mocules/common/Pagination.vue";
import { onMounted, ref, watch } from "vue";

interface List {
  userName: string;
  userRole: string;
  userResumScore: number;
  userSkillMatch: number;
  userSkill: string;
}

const tableData = ref<List[]>([]);
const selectedPage = ref<number>(1);
const totalPage = ref<number>(0);
const totalCount = ref<number | undefined>();
const limit = ref<number>(10);

const getData = () => {
   tableData.value = [
    {
      userName: "Marco",
      userRole: "FrontEnd Developer",
      userResumScore: 89,
      userSkillMatch: 80,
      userSkill: "Junior",
    },
    {
      userName: "Jeff",
      userRole: "BackEnd Developer",
      userResumScore: 72,
      userSkillMatch: 65,
      userSkill: "Senior",
    },
    {
      userName: "Eric",
      userRole: "User Experience",
      userResumScore: 90,
      userSkillMatch: 91,
      userSkill: "Senior",
    },
    {
      userName: "Merry",
      userRole: "User Interface",
      userResumScore: 56,
      userSkillMatch: 43,
      userSkill: "Junior",
    },
    {
      userName: "John",
      userRole: "Product Manager",
      userResumScore: 100,
      userSkillMatch: 100,
      userSkill: "Senior",
    },
    {
      userName: "Max",
      userRole: "FrontEnd Developer",
      userResumScore: 100,
      userSkillMatch: 100,
      userSkill: "Senior",
    },
    {
      userName: "poloe",
      userRole: "Product Manager",
      userResumScore: 80,
      userSkillMatch: 78,
      userSkill: "Senior",
    },
    {
      userName: "John",
      userRole: "BackEnd Developer",
      userResumScore: 50,
      userSkillMatch: 50,
      userSkill: "Junior",
    },
    {
      userName: "Marco",
      userRole: "FrontEnd Developer",
      userResumScore: 89,
      userSkillMatch: 80,
      userSkill: "Junior",
    },
    {
      userName: "Jeff",
      userRole: "BackEnd Developer",
      userResumScore: 72,
      userSkillMatch: 65,
      userSkill: "Senior",
    },
    {
      userName: "Eric",
      userRole: "User Experience",
      userResumScore: 90,
      userSkillMatch: 91,
      userSkill: "Senior",
    },
    {
      userName: "Merry",
      userRole: "User Interface",
      userResumScore: 56,
      userSkillMatch: 43,
      userSkill: "Junior",
    },
    {
      userName: "John",
      userRole: "Product Manager",
      userResumScore: 100,
      userSkillMatch: 100,
      userSkill: "Senior",
    },
    {
      userName: "Max",
      userRole: "FrontEnd Developer",
      userResumScore: 100,
      userSkillMatch: 100,
      userSkill: "Senior",
    },
    {
      userName: "poloe",
      userRole: "Product Manager",
      userResumScore: 80,
      userSkillMatch: 78,
      userSkill: "Senior",
    },
    {
      userName: "John",
      userRole: "BackEnd Developer",
      userResumScore: 50,
      userSkillMatch: 50,
      userSkill: "Junior",
    },
  ];

  totalCount.value = tableData.value !== undefined ? tableData.value.length : 0;
  totalPage.value = Math.ceil(totalCount.value / limit.value) !== 0 ? Math.ceil(totalCount.value / limit.value) : 1;
  tableData.value = disassmble(selectedPage.value -1, tableData.value, limit.value);
};

onMounted(() => {
  getData();
});

const disassmble = (index:number, data:List[], size:number) =>{
  const res = new Array()

  for(let i = 0; i < data.length; i += size){
    res.push(data.slice(i, i + size))
  }
  return res[index]
}

const reset =(pageIdx:number)=>{
  if(pageIdx === 0) selectedPage.value = 1;
  else selectedPage.value = pageIdx;
}

watch(selectedPage, () => {
  getData();
});

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
      scrollbar-width: none;
    }
  }
}
</style>
