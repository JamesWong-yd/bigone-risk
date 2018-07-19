<template>
    <vue-seamless-scroll :data="listData" :class-option="optionSingleHeightTime" class="seamless-warp">
        <ul class="item">
            <li v-for="(item, index) in listData" :key="index">
                <span class="title" v-text="item.title"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
.seamless-warp {
  height: 50px;
  overflow: hidden;
}
</style>
<script>
export default {
  data() {
    return {
      listData: [
        {
          title: '报送者1于06-05 14:30:56产生一个关于"天河区棠下旧村庄全面改造成本核算项目"临迁费超标的高级廉政风险，请及时处理。',
        },
        {
          title: '报送者2于06-06 11:20:48产生一个关于"天河区棠下旧村庄全面改造成本核算项目"拆运费超标的高级廉政风险，请及时处理。',
          date: '2017-12-16'
        },
        {
          title: '报送者3于06-07 14:30:56产生一个关于"天河区棠下旧村庄全面改造成本核算项目"复建费超标的高级廉政风险，请及时处理。',
          date: '2017-12-16'
        },
        {
          title: '报送者1于06-05 14:30:56产生一个关于"天河区棠下旧村庄全面改造成本核算项目"临迁费超标的高级廉政风险，请及时处理。',
        },
        {
          title: '报送者2于06-06 11:20:48产生一个关于"天河区棠下旧村庄全面改造成本核算项目"拆运费超标的高级廉政风险，请及时处理。',
          date: '2017-12-16'
        },
        {
          title: '报送者3于06-07 14:30:56产生一个关于"天河区棠下旧村庄全面改造成本核算项目"复建费超标的高级廉政风险，请及时处理。',
          date: '2017-12-16'
        }
      ]
    }
  },
  computed: {
    optionSingleHeightTime() {
      return {
        singleHeight: 50,
        waitTime: 2100
      }
    }
  }
}
</script>