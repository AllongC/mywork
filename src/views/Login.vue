<template>
  <div>
    <div class="closeSec">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoSec">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="InputSec">
      <input type="text" />
    </div>
    <div class="InputSec">
      <input type="text" />
    </div>
    <div class="LoginSec">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.closeSec {
  padding: 8.333vw 0vw 0vw 8.333vw;
  .iconicon-test {
    font-size: 6.389vw;
  }
}
.logoSec {
  text-align: center;
  .iconnew {
    color: #d81e06;
    font-size: 35vw;
  }
}
.InputSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  input {
    height: 16.667vw;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
  }
}
.LoginSec {
  margin-top: 16.667vw;
  padding: 0vw 5.556vw 0vw 5.556vw;
  button {
    border: none;
    background-color: #d81e06;
    color: white;
    width: 100%;
    height: 13.333vw;
    border-radius: 6.667vw;
  }
}
</style>