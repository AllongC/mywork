<template>
  <div class="HomeTop">
    <span class="iconfont iconnew"></span>
    <div class="HomeInfo">
      <span class="iconfont iconsearch"></span>
      搜索新闻
    </div>
    <span class="iconfont iconwode"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.HomeTop {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: red;
  color: #fff;
  padding: 0px 10px;
  .iconnew {
    font-size: 54px;
  }
  .HomeInfo {
    flex: 1;
    text-align: center;
    background-color: #f97979;
    margin: 0px 20px 0px 10px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }
  .iconwode {
    font-size: 24px;
    opacity: 0.6;
  }
}
</style>