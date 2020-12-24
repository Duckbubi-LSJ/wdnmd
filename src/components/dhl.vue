<template>
  <div>
    <el-aside class="zuob" width="209px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu index="1">
          <template slot="title">
            <router-link tag="div" class to="/sy/syindex">
              <i class="el-icon-s-home"></i>首页
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-collection"></i> 文章管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link tag="div" class to="/sy/lbtgl">轮播图管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link tag="div" class to="/sy/kcgl">课程管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link tag="div" class to="/sy/jytt">教育头条</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link tag="div" class to="/sy/hdlb">活动列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
              <router-link tag="div" class to="/sy/mxjs">明星教师</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <router-link tag="div" class to="/sy/ddgl">
              <i class="el-icon-tickets"></i>订单管理
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <router-link tag="div" class to="/sy/yhgl">
              <i class="el-icon-s-custom"></i>用户管理
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <router-link tag="div" class to="/sy/cwgl">
              <i class="el-icon-data-analysis"></i>财务管理
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-service"></i>客服管理
          </template>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-s-tools"></i> 设置
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">通用设置</el-menu-item>
            <el-menu-item index="2-2">关于我们</el-menu-item>
            <el-menu-item index="2-3">员工管理</el-menu-item>
            <el-menu-item index="2-4">角色管理</el-menu-item>
            <el-menu-item index="2-5">操作日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <keep-alive class="ybbbs">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.ybbbs {
  float: right;
}
.zuob {
  float: left;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-menu {
  border-bottom: solid 1px #e6e6e6;
}
i {
  color: #9137f3;
}
.el-aside {
  color: #333;
}
</style>