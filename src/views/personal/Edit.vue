<template>
  <div v-if="dataObj">
    <CommonTop topVal="编辑资料" />
    <div class="imgSec">
      <img v-if="dataObj.head_img" :src=" axios.defaults.baseURL+dataObj.head_img" alt />
      <img v-else src="@/img/logo.jpg" alt />
    </div>
    <ListSec MyFocus="昵称" :FocusUser="dataObj.nickname" />
    <ListSec MyFocus="密码" FocusUser="******" />
    <ListSec MyFocus="性别" :FocusUser="dataObj.gender==1?'男':'女'" />
  </div>
</template>

<script>
import ListSec from "@/components/ListSec";
import CommonTop from "@/components/CommonTop";
export default {
  data() {
    return {
      dataObj: null
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.dataObj = data;
      }
    });
  },
  components: {
    ListSec,
    CommonTop
  }
};
</script>

<style lang="less" scoped>
.imgSec {
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
</style>