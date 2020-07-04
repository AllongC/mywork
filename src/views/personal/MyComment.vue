<template>
  <div>
    <CommonTop topVal="我的跟贴" />
    <div class="comment">
      <div class="mutil" v-for="item in comment" :key="item.id">
        <span>{{item.create_date.split('T')[0]}}</span>
        <div class="parent" v-if="item.parent">
          <p>回复：{{item.parent.user.nickname}}</p>
          <p>{{item.parent.content}}</p>
        </div>
        <p>{{item.content}}</p>
        <div class="content">
          <p>原文:{{item.post.title}}</p>
          <span class="iconfont iconjiantou1"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
export default {
  components: {
    CommonTop
  },
  data() {
    return {
      comment: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_comments",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.comment = data;
      console.log(this.comment);
    });
  }
};
</script>

<style lang="less" scoped>
.comment {
  padding: 30px 0px;
  .mutil {
    border-bottom: 1px solid #e4e4e4;
    padding: 20px 14px;
    span {
      font-size: 14px;
      color: #888;
    }
    p {
      padding: 6px 0px;
      font-size: 16px;
      color: #333;
    }
    .parent {
      background-color: #e4e4e4;
      margin: 8px 0px;
      padding: 10px 16px;
      p {
        font-size: 14px;
        color: #888;
      }
    }
    .content {
      display: flex;
      align-items: center;
      p {
        width: 330px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        color: #888;
      }
      span {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>