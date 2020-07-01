<template>
  <div>
    <CommonTop topVal="更多跟贴" />
    <comment :comment="item" v-for="item in commentList " :key="item.id" />
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
import comment from "@/components/comment/index";
export default {
  data() {
    return {
      commentList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/post_comment/1",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.commentList = data;
      console.log(this.commentList);
    });
  },
  components: {
    CommonTop,
    comment
  }
};
</script>

<style lang="less" scoped>
</style>