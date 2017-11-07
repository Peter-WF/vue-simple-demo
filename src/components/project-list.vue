<template>
  <div class="project-list">
    <el-main>
      <el-table :data="projectList" style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        />
        <el-table-column
          prop="description"
          label="描述"
          width="180"
        />
        <el-table-column prop="manager" label="负责人"/>
      </el-table>
      <div class="project-list-operation">
        <el-button @click="_updateProjectList">更新项目列表</el-button>
      </div>
    </el-main>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'project-list',
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
    created() {
      this.updateProjectListAction()
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-list {
    width: 50%;
    min-width: 550px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .project-list-operation{
      margin-top: 50px;
    }
  }
</style>
