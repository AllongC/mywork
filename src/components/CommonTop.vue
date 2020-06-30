<template>
  <div class="topSec">
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <p>{{topVal}}</p>
  </div>
</template>

<script>
export default {
  props: ["topVal"]
};
</script>

<style lang="less" scoped>
.topSec {
  display: flex;
  padding: 5.556vw 0vw 0vw 0vw;
  span {
    margin-left: 5.556vw;
  }
  p {
    flex: 1;
    text-align: center;
    margin-right: 8.333vw;
    font-weight: bold;
  }
}
</style>