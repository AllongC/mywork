<template>
  <div class="ListSec">
    <p class="MyFocus">{{MyFocus}}</p>
    <p class="FocusUser">{{FocusUser}}</p>
    <p class="Skip">
      <span class="iconfont iconjiantou1"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["MyFocus", "FocusUser"]
};
</script>

<style lang="less" scoped>
.ListSec {
  height: 16.667vw;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  margin-left: 4.167vw;
  .MyFocus {
  }
  .FocusUser {
    flex: 1;
    text-align: right;
    padding-right: 3.889vw;
    color: #b3b3b3;
  }
  .Skip {
    padding-right: 4.167vw;
    color: #b3b3b3;
  }
}
</style>