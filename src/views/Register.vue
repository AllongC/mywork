<template>
  <div>
    <CommonSec />
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      rule="^\d{3,6}$"
      errMsg="手机号码或用户名格式不正确"
      @change="setUsername"
    />
    <InputSec type="text" InputText="昵称" rule="^\w{3,6}$" errMsg="昵称格式不正确" @change="setNickname" />
    <InputSec type="password" InputText="密码" rule="^\d{3,6}$" errMsg="密码不正确" @change="setPassword" />
    <LoginSec btnInfo="注册" @inform="accept" />
  </div>
</template>

<script>
import CommonSec from "@/components/CommonSec";
import InputSec from "@/components/InputSec";
import LoginSec from "@/components/LoginSec";
export default {
  data() {
    return {
      username: "",
      nickname: "",
      password: ""
    };
  },
  methods: {
    accept() {
      console.log("父级触发...");
      console.log(this.username);
      console.log(this.nickname);
      console.log(this.password);
    },
    setUsername(newVal) {
      this.username = newVal;
    },
    setNickname(newVal) {
      this.nickname = newVal;
    },
    setPassword(newVal) {
      this.password = newVal;
    }
  },
  components: {
    CommonSec,
    InputSec,
    LoginSec
  }
};
</script>

<style lang="less" scoped>
</style>,