<template>
  <div>
    <CommonTop topVal="我的关注" />
    <div v-if="userList.length">
      <div class="item" v-for="(list,index) in userList" :key="list.id">
        <img v-if="list.head_img" :src="$axios.defaults.baseURL + list.head_img" />
        <img v-else src="@/img/logo.jpg" />
        <div class="foucsInfo">
          <p>{{list.nickname}}</p>
          <p class="focusData">{{list.create_date.split("T")[0]}}</p>
        </div>
        <button v-if="userList[index].isFocus" @click="unfollow(list.id,index)">取消关注</button>
        <button v-else @click="addfollow(list.id,index)" class="redBtn">关注</button>
      </div>
    </div>
    <div v-else class="noFocus">
      <p>暂未关注</p>
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
  methods: {
    upData() {
      this.$axios({
        url: "/user_follows",
        method: "get"
      }).then(res => {
        this.userList = res.data.data.map(item => {
          return { ...item, isFocus: true };
        });
      });
    },
    unFoucs(id) {
      this.$axios({
        url: "/user_unfollow/" + id,
        method: "get"
      }).then(res => {
        const { message } = res.data;
        if (message == "取消关注成功") {
          console.log(message);
        }
      });
    },
    addFocus(id) {
      this.$axios({
        url: "/user_follows/" + id,
        method: "get"
      }).then(res => {
        const { message } = res.data;
        console.log(message);
      });
    },
    unfollow(id, index) {
      this.userList[index].isFocus = false;
      this.unFoucs(id);
    },
    addfollow(id, index) {
      this.userList[index].isFocus = true;
      this.addFocus(id);
    }
  },
  components: {
    CommonTop
  },
  created() {
    this.upData();
  }
};
</script>

<style lang="less" scoped>
.item {
  height: 27.778vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0vw 5.556vw;
  border-bottom: 0.278vw solid #e4e4e4;
  img {
    object-fit: cover;
    width: 11.111vw;
    height: 11.111vw;
    border-radius: 50%;
    margin-right: 5.556vw;
  }
  .foucsInfo {
    flex: 1;
    p {
      font-size: 4.444vw;
      color: #333;
    }
    .focusData {
      font-size: 3.889vw;
      color: #888;
      margin-top: 1.389vw;
    }
  }
  button {
    width: 20.556vw;
    height: 8.333vw;
    border: none;
    border-radius: 4.167vw;
    font-size: 3.333vw;
  }
  .redBtn {
    background-color: red;
    color: #fff;
  }
}
.noFocus {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 50%;
    color: #666;
  }
}
</style>