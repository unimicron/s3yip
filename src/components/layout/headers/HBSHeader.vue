<template>
  <div class="header">
    <div class="left">
      <el-button @click="toggleMenu">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </el-button>
      <h2>HBS Management</h2>
    </div>
    <div class="right">
      <el-button type="warning">System Status</el-button>
      <el-button type="info">Maintenance</el-button>
    </div>
  </div>
</template>
