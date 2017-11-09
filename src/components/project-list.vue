<template>
  <div class="project-list">
    <el-alert
      title="提示:"
      type="info"
      :closable="false"
      show-icon
    >
      自由切换数据 local、server、mock 数据，可
      <a target="mock-server" href='http://api.wangfeia.com/mock-server/#/edit/GET/api/projects'>
        点击这里编辑 mock 数据
      </a>
    </el-alert>
    <el-main>
      <el-table :data="projectList" style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="50"
        />
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="description" label="描述"/>
        <el-table-column prop="manager" label="负责人"/>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="deleteProject(scope.row)"
            >
              删除
            </el-button>
            <el-button
              type="text"
              size="small"
              @click="$router.push('/edit')"
            >
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="project-list-operation">
        <el-button @click="updateProjectList">更新项目列表</el-button>
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
        'deleteProjectAction'
      ]),
      updateProjectList() {
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
      },
      deleteProject(project) {
        this.deleteProjectAction(project).then(() => {
          this.$message({
            showClose: true,
            message: '删除成功'
          })
        }).catch(err => {
          console.error(err)
          this.$message.error({
            showClose: true,
            message: err
          })
        })
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-list {
    /*width: 50%;*/
    /*min-width: 550px;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
    flex: 1;
    .el-main {
      margin-top: 10px;
      padding: 0;
    }
    .project-list-operation {
      margin-top: 20px;
    }
  }
</style>
