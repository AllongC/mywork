<template>
  <div>
    <button @click="addfocus(1)">用户1</button>
    <button @click="addfocus(2)">用户2</button>
    <button @click="addfocus(3)">用户3</button>
    <button @click="addfocus(4)">用户4</button>
    <button @click="addfocus(5)">用户5</button>
    <button @click="addfocus(6)">用户6</button>
    <button @click="addfocus(7)">用户7</button>
    <button @click="addfocus(8)">用户8</button>
  </div>
</template>

<script>
export default {
  methods: {
    addfocus(id) {
      this.$axios({
        url: "/post_star/" + id,
        method: "get"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>