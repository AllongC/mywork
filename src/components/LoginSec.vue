<template>
  <div class="LoginSec">
    <button @click="trigger">{{btnInfo}}</button>
  </div>
</template>

<script>
export default {
  props: ["btnInfo"],
  methods: {
    trigger() {
      this.$emit("inform");
    }
  }
};
</script>

<style lang="less" scoped>
.LoginSec {
  margin-top: 16.667vw;
  padding: 0vw 5.556vw 0vw 5.556vw;
  button {
    outline: none;
    border: none;
    background-color: #d81e06;
    color: white;
    width: 100%;
    height: 13.333vw;
    border-radius: 6.667vw;
    font-size: 5vw;
  }
}
</style>