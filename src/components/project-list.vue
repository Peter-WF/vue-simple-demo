<template>
  <div class="project-list">
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
    .project-list-operation {
      margin-top: 50px;
    }
  }
</style>
