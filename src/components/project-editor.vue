<template>
  <div class="project-editor">
    <el-alert
      title="提示:"
      type="info"
      :closable="false"
      show-icon
    >
      <a target="mock-server" href='http://api.wangfeia.com/mock-server/#/edit/PATCH/api/projects/233'>
        点击这里编辑 mock 数据
      </a>
    </el-alert>
    <project-form v-model="form" @submit="onSubmit"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ProjectForm from './project-form.vue'
  export default {
    name: 'project-editor',
    props: {},
    data() {
      return {
        form: {
          id: 233,
          name: '默认编辑项目名称',
          manager: '王五',
          description: '默认编辑项目描述'
        }
      }
    },
    methods: {
      ...mapActions([
        'updateProjectAction'
      ]),
      onSubmit() {
        this.updateProjectAction(this.form).then(() => {
          this.$message({
            showClose: true,
            message: '更新成功'
          })
          this.$router.push('/')
        }).catch(err => {
          console.error(err)
          this.$message.error({
            showClose: true,
            message: err
          })
        })
      }
    },
    components: {
      ProjectForm
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-editor {
    width: 100%;
  }
</style>
