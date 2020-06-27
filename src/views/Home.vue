<template>
  <div>
    <HomeTop />
    <van-tabs v-model="active">
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
        <Category :category="item" v-for="item in category" :key="item.id" />
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
      categoryList: [],
      category: []
    };
  },
  components: {
    HomeTop,
    Category
  },
  methods: {
    getCategory(id) {
      this.$axios({
        url: "/post",
        method: "get",
        params: {
          category: id
        }
      }).then(res => {
        this.category = res.data.data;
      });
    },
    getId() {
      return this.categoryList[this.active].id;
    }
  },
  watch: {
    active() {
      this.getCategory(this.getId());
    }
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      this.categoryList = res.data.data;
      this.getCategory(this.getId());
    });
  }
};
</script>

<style lang="less" scoped>
</style>