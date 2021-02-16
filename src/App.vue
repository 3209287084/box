<template>
  <div id="app">
    <header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <h1>CRM管理系统</h1>
        <el-menu-item index="1"><router-link :to="{name:'Home'}">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/Custom/{a}">客户管理</router-link></el-menu-item>
        <el-menu-item index="3"><router-link :to="{name:'System'}">系统设置</router-link></el-menu-item>
      </el-menu>
    </header>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
  
  },
};
</script>
<style lang="less">
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
header {
  .el-menu {
    .el-menu-item {
      font-size: 18px;
       border-bottom: none;
    }
  }
  h1 {
    padding-right: 25px;
    line-height: 61px;
    float: left;
  }
}
</style>
