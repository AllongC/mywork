<template>
  <div>
    <CommonTop topVal="我的收藏" />
    <Category :category="item" v-for="item in post" :key="item.id" />
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
import Category from "@/components/Category";
export default {
  data() {
    return {
      post: []
    };
  },
  components: {
    CommonTop,
    Category
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.post = data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>