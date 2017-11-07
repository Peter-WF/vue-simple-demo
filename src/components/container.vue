<template>
  <div class="container">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          :default-active="defaultActive"
          :default-openeds="['1']"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-tickets"></i>mock 功能演示</template>
            <el-menu-item index="1" :route="{ path: '/' }">列表展示(GET)</el-menu-item>
            <el-menu-item index="2" :route="{ path: '/edit' }">内容编辑(PATCH)</el-menu-item>
            <el-menu-item index="3" :route="{ path: '/add' }">内容新增(POST)</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <router-view class="content"/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'container',
    props: {},
    data() {
      return {
        defaultActive: this.$route.meta.index
      }
    },
    watch: {
      $route(to) {
        this.defaultActive = to.meta.index
      }
    },
    methods: {
      ...mapActions([
        'updateProjectListAction'
      ])
    },
    created() {
      this.updateProjectListAction()
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .container {
    .el-container {
      position: relative;
    }
  }
</style>
