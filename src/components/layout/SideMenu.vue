```vue
<template>
  <div class="menu-container" :class="{ collapsed: isCollapse }">
    <div class="logo-container">
      <img src="../../assets/s3yip-logo.png" alt="S3YIP" class="logo" />
    </div>

    <el-menu
      class="sidebar-menu"
      :collapse="isCollapse"
      :default-active="activeMenu"
      router
      background-color="rgb(112,128,144)"
      text-color="#fff"
      :collapse-transition="false"
    >
      <el-menu-item index="/p/dashboard">
        <div class="menu-item-content">
          <i class="fas fa-industry"></i>
          <template v-if="isCollapse">
            <div class="collapsed-text">
              <span>P</span>
              <span>Dashboard</span>
            </div>
          </template>
          <template v-else>
            <span>P Dashboard</span>
          </template>
        </div>
      </el-menu-item>

      <el-menu-item index="/hbs/dashboard">
        <div class="menu-item-content">
          <i class="fas fa-cogs"></i>
          <template v-if="isCollapse">
            <div class="collapsed-text">
              <span>HBS</span>
              <span>Dashboard</span>
            </div>
          </template>
          <template v-else>
            <span>HBS Dashboard</span>
          </template>
        </div>
      </el-menu-item>

      <el-menu-item index="/qa/dashboard">
        <div class="menu-item-content">
          <i class="fas fa-check-circle"></i>
          <template v-if="isCollapse">
            <div class="collapsed-text">
              <span>QA</span>
              <span>Dashboard</span>
            </div>
          </template>
          <template v-else>
            <span>QA Dashboard</span>
          </template>
        </div>
      </el-menu-item>
    </el-menu>

    <div class="copyright" v-if="!isCollapse">
      ©2022 Copyright S3 YIP; all rights reserved.
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeMenu = computed(() => route.path);

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

:deep(*) {
  font-family: Calibri, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.menu-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(112, 128, 144);
  width: 200px;
  transition: width 0.3s;
}

.menu-container.collapsed {
  width: 64px;
}

.logo-container {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(112, 128, 144);
}

.logo {
  height: 60px;
  width: auto;
  transition: all 0.3s;
}

.menu-container.collapsed .logo {
  height: 40px;
}

.sidebar-menu {
  flex: 1;
  border: none;
  background-color: rgb(112, 128, 144);
}

:deep(.el-menu) {
  border: none;
  background-color: rgb(112, 128, 144);
}

:deep(.el-menu-item) {
  height: auto !important;
  padding: 8px 5px !important;
}

:deep(.menu-item-content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

:deep(.collapsed-text) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.2;
  font-size: 12px;
}

:deep(.menu-item-content i) {
  font-size: 18px;
  margin-bottom: 2px;
}

:deep(.el-menu:not(.el-menu--collapse)) {
  .menu-item-content {
    flex-direction: row;
    gap: 8px;
  }

  .menu-item-content span {
    font-size: 16px;
  }
}

:deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

:deep(.el-menu--collapse) {
  width: 64px;
}

.copyright {
  padding: 10px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  background-color: rgb(112, 128, 144);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
``` 這是完整的 SideMenu.vue 代碼，包含： 1. 展開/收合的布局控制 2.
圖標和文字的排版 3. 所有必要的樣式設定 4. 收合時文字換行顯示
需要調整任何部分嗎？
