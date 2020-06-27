<template>
  <div>
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
      <div class="mask">
        <div class="paly"></div>
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
      justify-content: center;
      align-items: center;
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
  height: 83.333vw;
  border-bottom: 1px solid #ececec;
  .title {
    font-size: 5vw;
    margin-bottom: 2.778vw;
  }
  .mask {
    height: 58.333vw;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .paly {
      position: relative;
      width: 19.444vw;
      height: 19.444vw;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
    .paly:after {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -16px;
      margin-left: -5px;
      content: "";
      border-right: 16px solid transparent;
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      border-left: 16px solid #fff;
    }
  }
  .smile {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: #999;
  }
}
</style>