<template>
    <div>
        <div class="leftBox">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
      
        
      
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>


        </div>
        <div class="rightBox"></div>
    </div>
</template>
<script>
export default {
    created(){
    console.log(this.$router)
    }
}
</script>
<style scoped lang='less'>
 .leftBox{
     width: 20%;
     height: 100%;
 }
 .rightBox{
     width: 80%;
     height: 100%;
 }
</style>