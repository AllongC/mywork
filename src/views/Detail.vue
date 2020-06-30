<template>
  <div>
    <div class="DetailTop">
      <span class="iconfont iconjiantou2"></span>
      <span class="iconfont iconnew"></span>
      <button
        v-if="category.type==1"
        @click="toggleFollow"
        :class="{follow:!category.has_follow}"
      >{{category.has_follow?'已关注':'关注'}}</button>
      <button v-else class="none"></button>
    </div>
    <div class="normal" v-if="category.type==1">
      <div class="title">{{category.title}}</div>
      <div class="userInfo">{{category.user.nickname}} {{category.create_date.split('T')[0]}}</div>
      <div class="mainContent" v-html="category.content"></div>
    </div>
    <div class="video" v-else-if="category.type==2">
      <video
        src="https://video.pearvideo.com/mp4/third/20200629/cont-1682744-11905134-133619-hd.mp4"
        poster="https://image.pearvideo.com/cont/20200629/cont-1682744-12415386.png"
        controls
      ></video>
      <div class="userInfo">
        <img
          v-if="category.user.head_img"
          :src="$axios.defaults.baseURL + category.user.head_img"
          alt
        />
        <img v-else src="@/img/logo.jpg" alt />
        <p>{{category.user.nickname}}</p>
        <button
          v-if="category.type==2"
          @click="toggleFollow"
          :class="{follow:!category.has_follow}"
        >{{category.has_follow?'已关注':'关注'}}</button>
      </div>
    </div>
    <div class="DetailBOttom">
      <div class="btn" @click="like" :class="{dianzan:category.has_like}">
        <span class="iconfont icondianzan"></span>
        {{category.like_length}}
      </div>
      <div class="btn">
        <span class="iconfont iconweixin"></span>微信
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: []
    };
  },
  methods: {
    toggleFollow() {
      if (this.category.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.category.user.id
        }).then(res => {
          this.category.has_follow = false;
        });
      } else {
        this.$axios({
          url: "/user_follows/" + this.category.user.id
        }).then(res => {
          this.category.has_follow = true;
        });
      }
    },
    like() {
      this.$axios({
        url: "/post_like/" + this.category.id
      }).then(res => {
        const { message } = res.data;
        if (message == "点赞成功") {
          this.category.like_length += 1;
          this.category.has_like = true;
        } else {
          this.category.like_length -= 1;
          this.category.has_like = false;
        }
      });
    }
  },
  mounted() {
    this.$axios({
      url: "/post/" + this.$route.params.id
    }).then(res => {
      const { data } = res.data;
      this.category = data;
      console.log(this.category);
    });
  }
};
</script>

<style lang="less" scoped>
.DetailTop {
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  .iconnew {
    flex: 1;
    margin-left: 4px;
    font-size: 54px;
  }
  button {
    font-size: 12px;
    height: 26px;
    padding: 0px 10px;
    border-radius: 22px;
    border: 1px solid #888;
  }
  .follow {
    font-size: 12px;
    height: 26px;
    padding: 0px 10px;
    border-radius: 22px;
    border: 1px solid red;
    background-color: red;
    color: #fff;
  }
  .none {
    display: none;
  }
}
/deep/ .normal {
  padding: 0px 10px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .userInfo {
    margin: 10px 0px;
    font-size: 14px;
    color: #999;
  }
  img {
    max-width: 100%;
  }
  .mainContent {
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }
}
.video {
  video {
    width: 100%;
  }
  .userInfo {
    padding: 0px 10px;
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-left: 8px;
      flex: 1;
      font-size: 14px;
      color: #999;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    button {
      font-size: 12px;
      height: 26px;
      padding: 0px 10px;
      border-radius: 22px;
      border: 1px solid #888;
    }
    .follow {
      font-size: 12px;
      height: 26px;
      padding: 0px 10px;
      border-radius: 22px;
      border: 1px solid red;
      background-color: red;
      color: #fff;
    }
  }
}
.DetailBOttom {
  display: flex;
  justify-content: space-around;
  padding: 26px 10px;
  border-bottom: 2px solid #e4e4e4;
  .btn {
    text-align: center;
    height: 26px;
    line-height: 26px;
    padding: 0px 14px;
    border: 1px solid #888;
    border-radius: 14px;
  }
  .dianzan {
    color: red;
    border: none;
    border: 1px solid red;
  }
  .iconweixin {
    color: #00c800;
  }
}
</style>