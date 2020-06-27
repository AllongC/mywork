<template>
  <div>
    <HomeTop />
    <HomeTab :active="active" :categoryList="categoryList" />
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import HomeTab from "@/components/HomeTab";
export default {
  data() {
    return {
      active: 0,
      categoryList: []
    };
  },
  components: {
    HomeTop,
    HomeTab
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      this.categoryList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>