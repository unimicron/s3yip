<template>
  <div class="app-wrapper">
    <SideMenu :is-collapse="isCollapse" class="sidebar" />

    <div class="main-container" :class="{ expanded: isCollapse }">
      <div class="header">
        <el-button @click="toggleMenu">
          <!-- 移除 type="text" -->
          <i class="fas" :class="isCollapse ? 'fa-bars' : 'fa-times'"></i>
        </el-button>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/layout/SideMenu.vue";

export default {
  name: "App",
  components: {
    SideMenu,
  },
  data() {
    return {
      isCollapse: true, // 改為 true，使其預設為縮小狀態
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-wrapper {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  transition: width 0.3s;
  flex-shrink: 0; /* 防止側邊欄被壓縮 */
}

.main-container {
  flex: 1;
  margin-left: 0; /* 移除 margin，改用 flex */
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.content {
  padding: 20px;
  overflow: auto;
  flex: 1;
}

/* 移除按鈕的默認樣式 */
.el-button {
  border: none;
  padding: 8px;
  font-size: 16px;
}

.el-button:hover {
  background-color: #f5f5f5;
}
</style>
