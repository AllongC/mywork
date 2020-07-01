<template>
  <div class="out">
    <comment :comment="item" v-for="item in commentList " :key="item.id" />
  </div>
</template>

<script>
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
      data.length = 3;
      this.commentList = data;
      console.log(this.commentList);
    });
  },
  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
</style>