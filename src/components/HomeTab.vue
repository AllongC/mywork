<template>
  <div>
    <van-tabs :v-model="active">
      <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">内容 1</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: ["active", "categoryList"]
};
</script>

<style>
</style>