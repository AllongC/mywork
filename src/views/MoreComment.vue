<template>
  <div>
    <CommonTop topVal="更多跟贴" />
    <comment :comment="item" v-for="item in commentList " :key="item.id" @sendIndexId="acceptId" />
    <Input :lastId="lastId" ref="Input" @reload="load" />
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
import comment from "@/components/comment/index";
import Input from "@/components/comment/CommentInput";
export default {
  data() {
    return {
      commentList: [],
      lastId: ""
    };
  },
  methods: {
    acceptId(id) {
      this.lastId = id;
      this.$refs.Input.getFocus();
    },
    load() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "get"
      }).then(res => {
        const { data } = res.data;
        if (data.length >= 3) {
          data.length = 3;
        }
        this.commentList = data;
        console.log(this.commentList);
      });
    }
  },
  mounted() {
    this.load();
  },
  components: {
    CommonTop,
    comment,
    Input
  }
};
</script>

<style lang="less" scoped>
</style>