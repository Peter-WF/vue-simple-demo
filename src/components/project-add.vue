<template>
  <div class="project-add">
    <el-alert
      title="提示:"
      type="info"
      :closable="false"
      show-icon
    >
      <a target="mock-server" href='http://api.wangfeia.com/mock-server/#/edit/POST/api/projects/'>
        点击这里编辑 mock 数据
      </a>
    </el-alert>
    <project-form v-model="form" @submit="onSubmit"/>
  </div>
</template>

<script>
  import ProjectForm from './project-form.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'project-add',
    props: {},
    data() {
      return {
        form: {
          name: '',
          manager: '',
          description: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'addProjectAction'
      ]),
      onSubmit() {
        this.addProjectAction(this.form).then(() => {
          this.$message({
            showClose: true,
            message: '更新成功'
          })
          this.$router.push('/')
        }).catch(err => {
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
  .project-add {
  }
</style>
