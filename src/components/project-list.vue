<template>
  <div class="project-list">
    <h2>项目列表: </h2>
    <ul>
      <li v-for="item in projectList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <el-button @click="_updateProjectList">更新项目列表</el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'project-list',
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        projectList: 'getProjectList'
      })
    },
    watch: {},
    methods: {
      ...mapActions([
        'updateProjectListAction',
        'updateProject'
      ]),
      _updateProjectList() {
        this.updateProjectListAction().then(() => {
          this.$message({
            showClose: true,
            message: '更新成功'
          })
        }).catch(err => {
          this.$message.error({
            showClose: true,
            message: err
          })
        })
      }
    },
    filters: {},
    created() {},
    mounted() {},
    updated() {},
    destroyed() {},
    components: {}
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-list {
  }
</style>
