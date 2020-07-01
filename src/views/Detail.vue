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
    <div v-if="commentList.length">
      <comment :comment="item" v-for="item in commentList " :key="item.id" />
    </div>
    <div v-else class="noComment">快来抢沙发...</div>
    <div class="heel">
      <button @click="$router.push('/morecomment/'+$route.params.id)">更多跟贴</button>
    </div>
    <div class="import">
      <input type="text" placeholder="写跟贴" />
      <span class="iconfont iconpinglun-"></span>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
  </div>
</template>

<script>
import comment from "@/components/comment/index";
export default {
  data() {
    return {
      category: [],
      commentList: []
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
    });
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      const { data } = res.data;
      if (data.length >= 3) {
        data.length = 3;
      }
      this.commentList = data;
      console.log(this.commentList);
    });
  },
  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
.DetailTop {
  display: flex;
  padding: 0vw 2.778vw;
  justify-content: center;
  align-items: center;
  .iconnew {
    flex: 1;
    margin-left: 1.111vw;
    font-size: 15vw;
  }
  button {
    font-size: 3.333vw;
    height: 7.222vw;
    padding: 0vw 2.778vw;
    border-radius: 6.111vw;
    border: 1px solid #888;
  }
  .follow {
    font-size: 3.333vw;
    height: 7.222vw;
    padding: 0vw 2.778vw;
    border-radius: 6.111vw;
    border: 1px solid red;
    background-color: red;
    color: #fff;
  }
  .none {
    display: none;
  }
}
/deep/ .normal {
  padding: 0vw 2.778vw;
  .title {
    font-size: 5vw;
    font-weight: bold;
  }
  .userInfo {
    margin: 2.778vw 0vw;
    font-size: 3.889vw;
    color: #999;
  }
  img {
    max-width: 100%;
  }
  .mainContent {
    font-size: 3.889vw;
    color: #666;
    line-height: 6.667vw;
  }
}
.video {
  video {
    width: 100%;
  }
  .userInfo {
    padding: 0vw 2.778vw;
    margin: 2.778vw 0vw;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-left: 2.222vw;
      flex: 1;
      font-size: 3.889vw;
      color: #999;
    }
    img {
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%;
    }
    button {
      font-size: 3.333vw;
      height: 7.222vw;
      padding: 0vw 2.778vw;
      border-radius: 6.111vw;
      border: 1px solid #888;
    }
    .follow {
      font-size: 3.333vw;
      height: 7.222vw;
      padding: 0vw 2.778vw;
      border-radius: 6.111vw;
      border: 1px solid red;
      background-color: red;
      color: #fff;
    }
  }
}
.DetailBOttom {
  display: flex;
  justify-content: space-around;
  padding: 7.222vw 2.778vw;
  border-bottom: 2px solid #e4e4e4;
  .btn {
    text-align: center;
    height: 7.222vw;
    line-height: 7.222vw;
    padding: 0vw 3.889vw;
    border: 1px solid #888;
    border-radius: 3.889vw;
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
.noComment {
  height: 55.556vw;
  text-align: center;
  color: #666;
  line-height: 55.556vw;
}
.heel {
  height: 30.556vw;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 40px;
    padding: 0px 40px;
    background-color: #fff;
    border: 1px solid #666;
    border-radius: 20px;
    font-size: 14px;
    color: #666;
  }
}
.import {
  padding-bottom: 5.556vw;
  display: flex;
  input {
    margin: 0vw 5.556vw;
    height: 8.333vw;
    text-indent: 1em;
    border-radius: 3.889vw;
    background-color: #d7d7d7;
    border: none;
    flex: 1;
  }
  span {
    font-size: 6.667vw;
    margin-right: 3.889vw;
  }
}
</style>