<template>
  <div class="project-form">
    <el-form
      ref="form"
      :model="value"
      label-width="80px"
    >
      <el-form-item v-if="value.id" label="项目id">
        <el-input v-model="value.id" :disabled="true"/>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="value.name"/>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="value.description"/>
      </el-form-item>
      <el-form-item label="负责人">
        <el-select v-model="value.manager" placeholder="请选择负责人">
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
  export default {
    name: 'project-form',
    props: ['value'],
    methods: {
      onSubmit() {
        this.$emit('submit')
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .project-form {
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
