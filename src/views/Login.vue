<template>
  <div>
    <CommonSec />
    <InputSec
      type="text"
      InputText="用户名/手机号码"
      :rule="ruleUser"
      errMsg="手机号码格式不正确"
      @change="setUsername"
    />
    <InputSec
      type="password"
      InputText="密码"
      :rule="rulePassword"
      errMsg="密码格式不正确"
      @change="setPassword"
    />
    <LoginSec btnInfo="登录" @inform="accept" />
  </div>
</template>

<script>
import InputSec from "@/components/InputSec";
import LoginSec from "@/components/LoginSec";
import CommonSec from "@/components/CommonSec";
export default {
  data() {
    return {
      username: "",
      password: "",
      ruleUser: "^\\d{3,6}$",
      rulePassword: "^\\d{3,6}$"
    };
  },
  methods: {
    accept() {
      if (this.username == "" || this.password == "") {
        this.$toast.fail("请输入完整的信息");
        return;
      }
      const regUser = new RegExp(this.ruleUser).test(this.username);
      if (!regUser) {
        this.$toast.fail("手机号码格式不正确");
        return;
      }
      const regPassword = new RegExp(this.rulePassword).test(this.password);
      if (!regPassword) {
        this.$toast.fail("密码格式不正确");
        return;
      }
      this.$axios({
        url: "http://127.0.0.1:3000/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        const { message, data } = res.data;
        console.log(data);
        if (message === "登陆成功") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          this.$toast.success(message);
        } else {
          this.$toast.fail(message);
        }
      });
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
    LoginSec,
    CommonSec
  }
};
</script>

<style lang="less" scoped>
</style>