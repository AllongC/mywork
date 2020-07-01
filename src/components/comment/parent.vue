<template>
  <div class="border">
    <div class="userInfo">
      <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
      <img v-else src="@/img/logo.jpg" alt />
      <div class="info">
        <p class="title">
          {{comment.user.nickname}}
          <span class="time">{{comment.create_date.split('T')[0]}}</span>
        </p>
      </div>
      <div class="replace">回复</div>
    </div>
    <p class="main">发表：{{comment.content}}</p>
    <Parent v-if="comment.parent" :comment="comment.parent" />
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["comment"]
};
</script>

<style lang="less" scoped>
.border {
  border: 1px solid #999;
}

.userInfo {
  display: flex;
  justify-content: center;
  align-items: cen2ter;
  margin: 5.556vw 5.556vw 0vw 5.556vw;
  img {
    width: 9.444vw;
    height: 9.444vw;
    border-radius: 50%;
    margin-right: 2.222vw;
  }
  .info {
    flex: 1;
    .title {
      font-size: 4.444vw;
      color: #333;
    }
    .time {
      font-size: 3.333vw;
      color: #888;
    }
  }
  .replace {
    font-size: 3.889vw;
    color: #888;
  }
}
.main {
  margin-left: 17.778vw;
  margin-bottom: 5.556vw;
  color: #666;
  font-size: 3.889vw;
}
</style>