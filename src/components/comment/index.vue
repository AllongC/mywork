<template>
  <div class="out">
    <div class="userInfo">
      <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
      <img v-else src="@/img/logo.jpg" alt />
      <div class="info">
        <p class="title">{{comment.user.nickname}}</p>
        <p class="time">{{comment.create_date.split('T')[0]}}</p>
      </div>
      <div class="replace" @click="IndexId">回复</div>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" @parentId="getId" />
    <p class="main">{{comment.content}}</p>
  </div>
</template>

<script>
import parent from "@/components/comment/parent";
export default {
  props: ["comment"],
  components: {
    parent
  },
  methods: {
    IndexId() {
      this.$emit("sendIndexId", this.comment.id);
    },
    getId(id) {
      this.$emit("sendIndexId", id);
    }
  }
};
</script>
<style lang="less" scoped>
.out {
  padding: 0vw 5.556vw 2.778vw 5.556vw;
  border-bottom: 1px solid #999;
}
.userInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.778vw;
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
      margin-top: 1.111vw;
      color: #888;
    }
  }
  .replace {
    font-size: 3.889vw;
    color: #888;
    margin: 5.556vw;
  }
}
.main {
  margin: 5.556vw;
  color: #666;
}
</style>