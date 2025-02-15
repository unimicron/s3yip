<template>
  <div class="header">
    <div class="left">
      <el-button @click="toggleMenu">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </el-button>
      <h2>Quality Assurance</h2>
    </div>
    <div class="right">
      <el-button type="danger">Quality Alerts</el-button>
      <el-button type="success">New Inspection</el-button>
    </div>
  </div>
</template>
