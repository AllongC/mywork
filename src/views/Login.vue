<template>
  <div>
    <div class="closeSec">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoSec">
      <span class="iconfont iconnew"></span>
    </div>
    <InputSec type="text" InputText="用户名/手机号码" rule="^\d{3,6}$" errMsg="手机号码格式不正确" />
    <InputSec type="password" InputText="密码" rule="^\d{3,6}$" errMsg="密码格式不正确" />
    <div class="LoginSec">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import InputSec from "@/components/InputSec";
export default {
  components: {
    InputSec
  }
};
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
  }
}
</style>