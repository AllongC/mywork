<template>
  <div class="InputSec">
    <input
      :type="type"
      :placeholder="InputText"
      v-model="EditVal"
      :class="{errors:!flag}"
      @blur="leaved"
    />
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
    }
  },
  methods: {
    leaved() {
      if (!this.flag) {
        this.$toast.fail(this.errMsg);
        return;
      }
      this.$emit("change", this.EditVal);
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
  .errors {
    border-bottom-color: #d81e06;
  }
}
</style>