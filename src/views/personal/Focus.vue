<template>
  <div>
    <CommonTop topVal="我的关注" />
    <div class="item">
      <img src="@/img/logo.jpg" />
      <div class="foucsInfo">
        <p>火星新闻播报</p>
        <p class="focusData">2019-10-10</p>
      </div>
      <button>取消关注</button>
    </div>
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
export default {
  components: {
    CommonTop
  }
};
</script>

<style lang="less" scoped>
.item {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid #e4e4e4;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .foucsInfo {
    flex: 1;
    p {
      font-size: 16px;
      color: #333;
    }
    .focusData {
      font-size: 14px;
      color: #888;
      margin-top: 5px;
    }
  }
  button {
    width: 74px;
    height: 30px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
  }
}
</style>