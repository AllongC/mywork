<template>
  <div>
    <div class="userSec" v-if="dataObj" @click="editUser">
      <div class="imgSec">
        <img :src=" $axios.defaults.baseURL +dataObj.head_img" v-if="dataObj.head_img" alt />
        <img src="@/img/logo.jpg" v-else alt />
      </div>
      <div class="infoSec">
        <p class="userName">
          <span class="iconfont iconxingbienan" v-if="dataObj.gender===1"></span>
          <span class="iconfont iconxingbienv" v-else></span>
          {{dataObj.nickname}}
        </p>
        <p class="userData">{{dataObj.create_date.split("T")[0]}}</p>
      </div>
      <div class="arrowsSec">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <ListSec MyFocus="我的关注" FocusUser="关注的用户" @tigger="$router.push('/focus')" />
    <ListSec MyFocus="我的跟帖" FocusUser="跟帖/回复" @tigger="$router.push('/mycomment')" />
    <ListSec MyFocus="我的收藏" FocusUser="文章/视频" @tigger="$router.push('/collect')" />
    <ListSec MyFocus="栏目管理" FocusUser="栏目选择" @tigger="$router.push('/column')" />
    <ListSec MyFocus="设置" FocusUser @tigger="ToMyFocus('set')" />
    <ListSec MyFocus="退出" FocusUser @tigger="ToMyFocus('quit')" />
  </div>
</template>

<script>
import ListSec from "@/components/ListSec";
export default {
  data() {
    return {
      dataObj: null
    };
  },
  components: {
    ListSec
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      const { message, data, statusCode } = res.data;
      if (message == "获取成功") {
        this.dataObj = data;
      }
    });
  },
  methods: {
    ToMyFocus(Val) {
      if (Val === "quit") {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        this.$router.replace("/login");
      }
    },
    editUser() {
      this.$router.push("/edit");
    }
  }
};
</script>

<style lang="less" scoped>
.userSec {
  display: flex;
  height: 37.444vw;
  align-items: center;
  border-bottom: 1.111vw solid #e4e4e4;
  .imgSec {
    flex: 1;
    text-align: right;
    img {
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }
  }
  .infoSec {
    flex: 2;
    text-align: left;
    padding: 5.556vw;
    .iconxingbienan {
      color: #81b8dd;
      font-size: 5vw;
    }
    .iconxingbienv {
      color: #f04bc0;
      font-size: 5vw;
    }
    .userData {
      margin-top: 2.778vw;
      color: #b3b3b3;
    }
  }
  .arrowsSec {
    flex: 1;
    text-align: right;
    padding-right: 4.167vw;
    color: #b3b3b3;
  }
}
</style>