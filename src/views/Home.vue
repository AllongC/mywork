<template>
  <div>
    <HomeTop />
    <van-tabs v-model="active">
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
        <van-list
          v-model="categoryList[active].loading"
          :finished="categoryList[active].finished"
          :immediate-check="false"
          @load="loadMorePost"
          finished-text="我也是有底线的"
        >
          <Category :category="item" v-for="item in categoryList[active].category" :key="item.id" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import Category from "@/components/Category";
export default {
  data() {
    return {
      active: 0,
      categoryList: []
    };
  },
  components: {
    HomeTop,
    Category
  },
  methods: {
    getCategory(id) {
      const commont = this.categoryList[this.active];
      this.$axios({
        url: "/post",
        method: "get",
        params: {
          category: id,
          pageIndex: commont.pageIndex,
          pageSize: commont.pageSize
        }
      }).then(res => {
        const category = [
          ...this.categoryList[this.active].category,
          ...res.data.data
        ];
        this.categoryList[this.active].category = category;
        console.log(category);
      });
    },
    getId() {
      return this.categoryList[this.active].id;
    },
    loadMorePost() {
      let commont = this.categoryList[this.active];
      commont.pageIndex += 1;
      this.getCategory(this.getId());
      if (commont.category.length <= commont.pageSize) {
        commont.finished = true;
      }
    }
  },
  watch: {
    active() {
      if (this.categoryList[this.active].category.length == 0) {
        this.getCategory(this.getId());
      }
    }
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      this.categoryList = res.data.data.map(item => {
        return {
          ...item,
          category: [],
          pageIndex: 1,
          pageSize: 5,
          finished: false,
          loading: false
        };
      });
      this.getCategory(this.getId());
    });
  }
};
</script>

<style lang="less" scoped>
</style>