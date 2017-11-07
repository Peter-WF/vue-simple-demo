<template>
  <div class="project-editor">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="项目id">
        <el-input v-model="form.id" :disabled="true"/>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.description"/>
      </el-form-item>
      <el-form-item label="负责人">
        <el-select v-model="form.manager" placeholder="请选择负责人">
          <el-option label="张三" value="张三"/>
          <el-option label="李四" value="李四"/>
          <el-option label="王五" value="王五"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click.native="$router.push('/')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

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
        'updateProject'
      ]),
      onSubmit() {
        this.updateProject(this.form).then(() => {
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
    components: {}
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-editor {
    width: 100%;
    .el-form {
      width: 50%;
      min-width: 350px;
      max-width: 550px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
