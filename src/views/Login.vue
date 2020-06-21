<template>
  <div>
    <div class="closeSec">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoSec">
      <span class="iconfont iconnew"></span>
    </div>
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      rule="^\d{3,6}$"
      errMsg="手机号码格式不正确"
      @change="setUsername"
    />
    <InputSec
      type="password"
      InputText="密码"
      rule="^\d{3,6}$"
      errMsg="密码格式不正确"
      @change="setPassword"
    />
    <LoginSec btnInfo="登录" @inform="accept" />
  </div>
</template>

<script>
import InputSec from "@/components/InputSec";
import LoginSec from "@/components/LoginSec";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    accept() {
      console.log("父级触发..." + this.username + this.password);
    },
    setUsername(newVal) {
      this.username = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
    }
  },
  components: {
    InputSec,
    LoginSec
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
</style>