<template>
  <div class="project-add">
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
