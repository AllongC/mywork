<template>
  <div>
    <HomeTop />
    <van-tabs v-model="active" sticky swipeable>
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          :immediate-check="false"
          @load="loadMorePost"
          finished-text="我也是有底线的"
        >
          <Category :category="item" v-for="item in item.category" :key="item.id" />
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
    getCategory() {
      const total = this.categoryList[this.active];
      this.$axios({
        url: "/post",
        method: "get",
        params: {
          category: this.getId(),
          pageIndex: total.pageIndex,
          pageSize: total.pageSize
        }
      }).then(res => {
        const { data } = res.data;
        total.getSize = data.length;
        total.category = [...total.category, ...data];
        console.log(total.category);
      });
    },
    getId() {
      return this.categoryList[this.active].id;
    },
    loadMorePost() {
      const total = this.categoryList[this.active];
      total.pageIndex += 1;
      total.loading = false;
      this.getCategory(this.getId());
      if (total.getSize == 0) {
        total.finished = true;
      }
    }
  },
  watch: {
    active() {
      const total = this.categoryList[this.active];
      if (total.category.length == 0) {
        this.getCategory();
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
          loading: false,
          getSize: 0
        };
      });
      this.getCategory();
    });
  }
};
</script>

<style lang="less" scoped>
</style>