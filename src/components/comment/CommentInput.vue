<template>
  <div>
    <div class="display" v-if="isShow">
      <input type="text" placeholder="写跟贴" @focus="getFocus" v-model="content" />
      <span class="iconfont iconpinglun-"></span>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div class="block" v-if="!isShow">
      <textarea rows="3" @blur="newFocus" ref="textarea" v-model="content"></textarea>
      <p @click="sendData">发送</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lastId"],
  data() {
    return {
      isShow: true,
      content: ""
    };
  },
  methods: {
    getFocus() {
      this.isShow = false;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    newFocus() {
      setTimeout(() => {
        this.isShow = true;
      }, 100);
    },
    sendData() {
      const data = {
        content: this.content
      };
      if (this.lastId) {
        data.parent_id = this.lastId;
        console.log(data.parent_id);
      }
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.display {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  padding: 10px 0px;
  background-color: #f2f2f2;
  input {
    height: 8.333vw;
    text-indent: 1em;
    border-radius: 3.889vw;
    background-color: #d7d7d7;
    border: none;
    flex: 1;
    margin-left: 10px;
  }
  span {
    font-size: 6.667vw;
    margin-right: 3.889vw;
    margin: 0px 10px;
  }
  .iconpinglun- {
    position: relative;
  }
  .iconpinglun-::after {
    content: "1020";
    position: absolute;
    top: -8px;
    left: 8px;
    font-size: 12px;
    background-color: red;
    color: white;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    padding: 0px 4px;
  }
}
.block {
  position: fixed;
  width: 100%;
  bottom: 0px;
  display: flex;
  align-items: flex-end;
  padding: 10px 0px;
  background-color: #f2f2f2;
  textarea {
    flex: 1;
    text-indent: 1em;
    border: none;
    resize: none;
    background-color: #d7d7d7;
    height: 90px;
    border-radius: 10px;
    margin-left: 10px;
  }
  p {
    padding: 0px 20px;
    margin: 0px 20px;
    height: 30px;
    line-height: 30px;
    background-color: red;
    color: white;
    border-radius: 15px;
    font-size: 14px;
  }
}
</style>