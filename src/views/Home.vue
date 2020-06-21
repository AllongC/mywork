<template>
  <div>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$axios({
      url: "http://localhost:3000/post",
      method: "get",
      params: {
        category: 8
      }
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
</style>