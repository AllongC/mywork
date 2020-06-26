<template>
  <div v-if="dataObj">
    <CommonTop topVal="编辑资料" />
    <div class="imgSec">
      <img v-if="dataObj.head_img" :src=" $axios.defaults.baseURL+dataObj.head_img" alt />
      <img v-else src="@/img/logo.jpg" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <ListSec MyFocus="昵称" :FocusUser="dataObj.nickname" @tigger="nicknameShow=true" />
    <ListSec MyFocus="密码" FocusUser="******" @tigger="pwdShow=true" />
    <ListSec MyFocus="性别" :FocusUser="dataObj.gender==1?'男':'女'" @tigger="genderShow=true" />
    <van-dialog v-model="nicknameShow" title="昵称修改" show-cancel-button @confirm="editNickname">
      <van-field v-model="nicknameVal" label="昵称" placeholder="请输入新的昵称" />
    </van-dialog>
    <van-dialog v-model="pwdShow" title="密码修改" show-cancel-button @confirm="editPwd">
      <van-field v-model="oldPwdVal" label="旧密码" placeholder="请输入旧的密码" />
      <van-field v-model="newPwdVal" label="新密码" placeholder="请输入新的密码" />
    </van-dialog>
    <van-action-sheet
      v-model="genderShow"
      :actions="genderActions"
      cancel-text="取消"
      close-on-click-action
      @select="editGender"
    />
  </div>
</template>

<script>
import ListSec from "@/components/ListSec";
import CommonTop from "@/components/CommonTop";
export default {
  data() {
    return {
      dataObj: null,
      confPwd: "",
      nicknameShow: false,
      nicknameVal: "",
      pwdShow: false,
      newPwdVal: "",
      oldPwdVal: "",
      genderShow: false,
      genderActions: [
        {
          name: "男",
          gender: 1
        },
        {
          name: "女",
          gender: 0
        }
      ]
    };
  },
  methods: {
    upData() {
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
          this.confPwd = this.dataObj.password;
        }
      });
    },
    editEvery(data) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        data: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        this.upData();
      });
    },
    editNickname() {
      this.editEvery({ nickname: this.nicknameVal });
      this.nicknameVal = "";
    },
    editPwd() {
      if (this.oldPwdVal !== this.confPwd) {
        this.$toast.fail("输入的密码与之前的密码错误错误");
        return;
      }
      this.editEvery({ password: this.newPwdVal });
      this.newPwdVal = "";
      this.oldPwdVal = "";
    },
    editGender(item) {
      this.editEvery({ gender: item.gender });
    },
    afterRead(fileObj) {
      const data = new FormData();
      data.append("file", fileObj.file);
      this.$axios({
        url: "/upload",
        data: data,
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        const { message, data } = res.data;
        if (message == "文件上传成功") {
          this.editEvery({ head_img: data.url });
        }
      });
    }
  },
  mounted() {
    this.upData();
  },
  components: {
    ListSec,
    CommonTop
  }
};
</script>

<style lang="less" scoped>
.imgSec {
  position: relative;
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .van-uploader {
    opacity: 0;
  }
}
</style>