<template>
  <div>
    <HomeTop />
    <van-tabs v-model="active">
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
        <Category :category="item" v-for="item in categoryList[active].category" :key="item.id" />
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
        this.categoryList[this.active].category = res.data.data;
        console.log(this.categoryList);
      });
    },
    getId() {
      return this.categoryList[this.active].id;
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
          pageSize: 5
        };
      });
      this.getCategory(this.getId());
    });
  }
};
</script>

<style lang="less" scoped>
</style>