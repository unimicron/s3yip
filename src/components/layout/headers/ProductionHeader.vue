<template>
  <div class="header">
    <div class="left">
      <el-button @click="toggleMenu">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </el-button>
      <h2>Production Management</h2>
    </div>
    <div class="right">
      <el-button type="primary">Production Status</el-button>
      <el-button type="success">Start Production</el-button>
    </div>
  </div>
</template>
