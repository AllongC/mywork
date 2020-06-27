<template>
  <div>
    <CommonTop topVal="我的关注" />
    <div class="item" v-for="list in userList" :key="list.id">
      <img v-if="list.head_img" :src="$axios.defaults.baseURL + list.head_img" />
      <img v-else src="@/img/logo.jpg" />
      <div class="foucsInfo">
        <p>{{list.nickname}}</p>
        <p class="focusData">{{list.create_date.split("T")[0]}}</p>
      </div>
      <button>取消关注</button>
    </div>
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
export default {
  data() {
    return {
      userList: []
    };
  },
  components: {
    CommonTop
  },
  mounted() {
    this.$axios({
      url: "/user_follows",
      method: "get"
    }).then(res => {
      this.userList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.item {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid #e4e4e4;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .foucsInfo {
    flex: 1;
    p {
      font-size: 16px;
      color: #333;
    }
    .focusData {
      font-size: 14px;
      color: #888;
      margin-top: 5px;
    }
  }
  button {
    width: 74px;
    height: 30px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
  }
}
</style>