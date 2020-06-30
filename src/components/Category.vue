<template>
  <div @click="$router.push('/detail/'+category.id)">
    <div class="singlePhoto" v-if="category.type==1&&category.cover.length==1">
      <div class="singleInfo">
        <p class="title">{{category.title}}</p>
        <p class="smile">{{category.user.nickname}} {{category.comment_length}}跟帖</p>
      </div>
      <img :src="category.cover[0].url" alt />
    </div>
    <div class="multiPhoto" v-else-if="category.type==1&&category.cover.length>=3">
      <div class="title">{{category.title}}</div>
      <div class="multiImg">
        <img :src="category.cover[0].url" alt />
        <img :src="category.cover[1].url" alt />
        <img :src="category.cover[2].url" alt />
      </div>
      <p class="smile">{{category.user.nickname}} {{category.comment_length}}跟帖</p>
    </div>
    <div class="video" v-else-if="category.type==2&&category.cover.length>=1">
      <p class="title">{{category.title}}</p>
      <div class="source">
        <img :src="category.cover[0].url" alt />
        <div class="mask"></div>
        <span class="iconfont iconshipin"></span>
      </div>
      <div class="smile">{{category.user.nickname}} {{category.comment_length}}跟帖</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style lang="less" scoped>
.singlePhoto {
  padding: 0 2.778vw;
  display: flex;
  height: 27.778vw;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ececec;
  .singleInfo {
    flex: 1;
    .smile {
      margin-top: 2.778vw;
      font-size: 3.889vw;
      color: #999;
    }
  }
  img {
    object-fit: cover;
    width: 33.333vw;
    height: 19.444vw;
  }
}
.multiPhoto {
  box-sizing: border-box;
  padding: 2.778vw 2.778vw;
  height: 44.444vw;
  border-bottom: 1px solid #ececec;
  .title {
    font-size: 4.444vw;
    margin-bottom: 2.778vw;
  }
  .multiImg {
    display: flex;
    .title {
      font-size: 5vw;
      margin-bottom: 2.778vw;
    }
    img {
      flex: 1;
      object-fit: cover;
      justify-content: center;
      align-items: center;
      margin-left: 1.389vw;
      width: 30.556vw;
      height: 19.444vw;
    }
  }
  p {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: #999;
  }
}
.video {
  box-sizing: border-box;
  padding: 2.778vw 2.778vw;
  height: 88.889vw;
  border-bottom: 1px solid #ececec;
  .title {
    font-size: 5vw;
    margin-bottom: 2.778vw;
  }
  .source {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      height: 58.333vw;
      width: 100%;
    }
    .mask {
      position: absolute;
      // height: 50px;
      // width: 50px;
      // border-radius: 50%;
      top: 0px;
      left: 0px;
      height: 58.333vw;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .iconshipin {
      position: absolute;
      font-size: 46px;
      color: white;
    }
  }
  .smile {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: #999;
  }
}
</style>