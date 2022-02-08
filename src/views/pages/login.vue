<script setup lang="ts">
  import { reactive, onMounted, defineAsyncComponent } from 'vue';
  const user = reactive({
      name: '',
      password: ''
    }
  )

</script>

<template>
<div>
  <h2>灰常好后台管理系统</h2>
  <el-form ref="formRef">
    <el-form-item>
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="user.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登录</el-button>
      <el-button type="default">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style>

</style>
