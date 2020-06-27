<template>
  <div>
    <CommonTop topVal="我的关注" />
    <div v-if="userList.length">
      <div class="item" v-for="list in userList" :key="list.id">
        <img v-if="list.head_img" :src="$axios.defaults.baseURL + list.head_img" />
        <img v-else src="@/img/logo.jpg" />
        <div class="foucsInfo">
          <p>{{list.nickname}}</p>
          <p class="focusData">{{list.create_date.split("T")[0]}}</p>
        </div>
        <button v-if="intermit.indexOf(list.id)==-1" @click="unfollow(list.id)">取消关注</button>
        <button v-else @click="follow(list.id)" class="redBtn">关注</button>
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
      userList: [],
      intermit: []
    };
  },
  methods: {
    upData() {
      this.$axios({
        url: "/user_follows",
        method: "get"
      }).then(res => {
        this.userList = res.data.data;
      });
    },
    unfollow(id) {
      this.intermit.push(id);
    },
    follow(id) {
      const newArr = this.intermit.map((item, index) => {
        if (item !== id) {
          return item;
        }
      });
      this.intermit = newArr;
    }
  },
  components: {
    CommonTop
  },
  created() {
    this.upData();
  },
  destroyed() {
    this.intermit.forEach(item => {
      this.$axios({
        url: "/user_unfollow/" + item,
        method: "get"
      }).then(res => {
        const { message } = res.data;
        if (message == "取消关注成功") {
          this.upData();
        }
      });
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