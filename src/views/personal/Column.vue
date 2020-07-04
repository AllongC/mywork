<template>
  <div>
    <CommonTop topVal="栏目管理" />
    <div class="delColumn">
      <h2 class="title">点击删除以下频道</h2>
      <div class="items">
        <p
          class="item"
          v-for="(item,index) in column"
          :key="item.id"
          @click="delItem(index)"
        >{{item.name}}</p>
      </div>
    </div>
    <div class="addColumn">
      <h2 class="title">点击添加以下频道</h2>
      <div class="items">
        <p
          class="item"
          v-for="(item,index) in delColumn"
          :key="item.id"
          @click="addItem(index)"
        >{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTop from "@/components/CommonTop";
export default {
  components: {
    CommonTop
  },
  data() {
    return {
      column: [],
      delColumn: []
    };
  },
  watch: {
    column() {
      localStorage.setItem("column", JSON.stringify(this.column));
    },
    delColumn() {
      localStorage.setItem("delColumn", JSON.stringify(this.delColumn));
    }
  },
  methods: {
    delItem(index) {
      if (this.column.length == 1) {
        return;
      }
      this.delColumn.push(this.column[index]);
      this.column.splice(index, 1);
    },
    addItem(index) {
      this.column.push(this.delColumn[index]);
      this.delColumn.splice(index, 1);
    }
  },
  mounted() {
    const localColumn = localStorage.getItem("column");
    const localDelColumn = localStorage.getItem("delColumn");
    if (localColumn || localDelColumn) {
      this.column = JSON.parse(localColumn);
      this.delColumn = JSON.parse(localDelColumn);
      return;
    }
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.column = data;
    });
  }
};
</script>

<style lang="less" scoped>
.delColumn {
  padding: 10px 10px;
  h2 {
    font-size: 14px;
    color: #888;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px 0px 0px;
      padding: 10px 20px;
      border: 1px solid #888;
      color: #666;
    }
  }
}
.addColumn {
  padding: 10px 10px;
  h2 {
    font-size: 14px;
    color: #888;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px 0px 0px;
      padding: 10px 20px;
      border: 1px solid #888;
      color: #666;
    }
  }
}
</style>