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
  height: 16.667vw;
  align-items: center;
  background-color: red;
  color: #fff;
  padding: 0vw 2.778vw;
  .iconnew {
    font-size: 15vw;
  }
  .HomeInfo {
    flex: 1;
    text-align: center;
    background-color: #f97979;
    margin: 0vw 5.556vw 0vw 2.778vw;
    height: 11.111vw;
    line-height: 11.111vw;
    border-radius: 5.556vw;
  }
  .iconwode {
    font-size: 6.667vw;
    opacity: 0.6;
  }
}
</style>