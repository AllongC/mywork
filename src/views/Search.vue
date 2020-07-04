<template>
  <div>
    <div class="searchTop">
      <span class="iconfont iconjiantou" @click="goBack"></span>
      <div class="searchInput">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" placeholder="请输入关键词" />
      </div>
      <p @click="searchKeyword">搜索</p>
    </div>
    <div class="recommend" v-if="!result.length&&serShow">
      <div class="history">
        <h2 class="title">历史记录</h2>
        <div class="item">
          <p v-for="(item,index) in record" :key="index" @click="searchSuggest(item)">{{item}}</p>
        </div>
      </div>
      <div class="hot">
        <h2 class="title">热门搜索</h2>
        <div class="item">
          <p v-for="(item,index) in hotKeyword" :key="index" @click="searchSuggest(item)">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="noResult" v-if="!result.length&&!serShow">没找到关于"{{keyword}}"相关的内容</div>
    <Category :category="item" v-for="item in result" :key="item.id" />
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  components: {
    Category
  },
  data() {
    return {
      keyword: "",
      result: [],
      record: [],
      serShow: true,
      hotKeyword: ["美女", "关晓彤", "阿信"]
    };
  },
  methods: {
    searchKeyword() {
      this.$axios({
        url: "/post_search",
        method: "get",
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        const { data } = res.data;
        this.result = data;
        if (this.result.length == 0) {
          this.serShow = false;
        }
        if (this.record.indexOf(this.keyword) == -1) {
          this.record.push(this.keyword);
        }
      });
    },
    searchSuggest(val) {
      this.keyword = val;
      this.searchKeyword();
    },
    goBack() {
      if (this.keyword !== "") {
        this.keyword = "";
        this.serShow = true;
      } else {
        this.$router.back();
      }
    }
  },
  mounted() {
    const localRecord = localStorage.getItem("record");
    if (localRecord) {
      this.record = JSON.parse(localRecord);
    }
  },
  watch: {
    keyword(newVal) {
      if (newVal == "") {
        this.result = [];
      }
    },
    record() {
      localStorage.setItem("record", JSON.stringify(this.record));
    }
  }
};
</script>

<style lang="less" scoped>
.searchTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  .searchInput {
    flex: 1;
    border: 1px solid #999;
    height: 38px;
    border-radius: 20px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    margin: 0px 10px;
    input {
      border: none;
    }
    .iconsearch {
      font-size: 16px;
      margin-right: 10px;
    }
  }
  p {
    color: #333;
  }
}
.history {
  padding: 10px 0px;
  margin: 0px 16px;
  border-bottom: 1px solid #a8a8a8;
  h2 {
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
  }
  .item {
    display: flex;
    p {
      margin: 5px;
      padding: 5px 5px;
    }
  }
}
.hot {
  padding: 10px 16px;
  h2 {
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
  }
  .item {
    display: flex;
    p {
      margin: 5px;
      padding: 5px 5px;
    }
  }
}
.noResult {
  text-align: center;
  margin-top: 150px;
  color: #888;
  font-size: 14px;
}
</style>