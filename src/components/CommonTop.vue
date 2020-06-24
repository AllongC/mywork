<template>
  <div class="topSec">
    <span class="iconfont iconjiantou2"></span>
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
  padding: 20px 0px 0px 0px;
  span {
    margin-left: 20px;
  }
  p {
    flex: 1;
    text-align: center;
    margin-right: 30px;
    font-weight: bold;
  }
}
</style>