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
    <InputSec
      type="password"
      InputText="密码"
      rule="^\d{3,6}$"
      errMsg="密码格式不正确"
      @change="setPassword"
    />
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
      password: "",
      flagUser: true,
      flagNick: true,
      flagPassword: true
    };
  },
  methods: {
    accept() {
      if (this.username == "" || this.nickname == "" || this.password == "") {
        this.$toast.fail("输入不能为空！");
        return;
      }
      if (!this.flagUser) {
        this.$toast.fail("手机号码或用户名格式不正确");
        return;
      }
      if (!this.flagPassword) {
        this.$toast.fail("密码格式不正确");
        return;
      }
      if (!this.flagNick) {
        this.$toast.fail("昵称格式不正确");
        return;
      }
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        const { message } = res.data;
        console.log(res.data);
        if (message === "注册成功") {
          this.$toast.success(message);
        } else {
          this.$toast.fail(message);
        }
      });
    },
    setUsername(newVal, flag) {
      this.username = newVal;
      this.flagUser = flag;
    },
    setNickname(newVal, flag) {
      this.nickname = newVal;
      this.flagNick = flag;
    },
    setPassword(newVal, flag) {
      this.password = newVal;
      this.flagPassword = flag;
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