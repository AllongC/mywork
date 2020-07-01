<template>
  <div class="out">
    <div class="userInfo">
      <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
      <img v-else src="@/img/logo.jpg" alt />
      <div class="info">
        <p class="title">{{comment.user.nickname}}</p>
        <p class="time">{{comment.create_date.split('T')[0]}}</p>
      </div>
      <div class="replace">回复</div>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" />
    <p class="main">{{comment.content}}</p>
  </div>
</template>

<script>
import parent from "@/components/comment/parent";
export default {
  props: ["comment"],
  components: {
    parent
  }
};
</script>
<style lang="less" scoped>
.out {
  padding: 0px 20px 10px 20px;
  border-bottom: 1px solid #999;
}
.userInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .info {
    flex: 1;
    .title {
      font-size: 16px;
      color: #333;
    }
    .time {
      font-size: 12px;
      margin-top: 4px;
      color: #888;
    }
  }
  .replace {
    font-size: 14px;
    color: #888;
    margin: 20px;
  }
}
.main {
  margin: 20px;
  color: #666;
}
</style>