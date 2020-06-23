<template>
  <div>
    <div class="userSec">
      <div class="imgSec">
        <img src="@/img/logo.jpg" alt />
      </div>
      <div class="infoSec">
        <p class="userName">
          <span class="iconfont iconxingbienan"></span> 火星网友
        </p>
        <p class="userData">2019-10-10</p>
      </div>
      <div class="arrowsSec">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <ListSec MyFocus="我的关注" FocusUser="关注的用户" />
    <ListSec MyFocus="我的跟帖" FocusUser="跟帖/回复" />
    <ListSec MyFocus="我的收藏" FocusUser="文章/视频" />
    <ListSec MyFocus="设置" FocusUser />
  </div>
</template>

<script>
import ListSec from "@/components/ListSec";
export default {
  components: {
    ListSec
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