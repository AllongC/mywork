<template>
  <div class="InputSec">
    <input :type="type" :placeholder="InputText" v-model="EditVal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      EditVal: "",
      flag: true
    };
  },
  props: ["type", "InputText", "rule", "errMsg"],
  watch: {
    EditVal(newVal) {
      const reg = new RegExp(this.rule).test(newVal);
      this.flag = reg;
      if (!this.flag) {
        console.log(this.errMsg);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.InputSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  input {
    outline: none;
    height: 16.667vw;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    font-size: 5vw;
  }
}
</style>