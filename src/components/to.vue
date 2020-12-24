<template>
  <div>
    <div class="tos">
      <div @click=" loginout()" class="zx">注销</div>
      <div class="toto">
        <i class="el-icon-collection"></i>
        非翔教育
      </div>
      <div class="namess">{{names}}</div>
      <div class="tox">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>

      <div class="tub">
        <i class="el-icon-message-solid"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    names: {
      type: String,
      default: "user"
    }
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    loginout() {
      localStorage.removeItem("user");
      this.$message({
        message: "注销成功！",
        type: "success"
      });
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped>
.zx {
  float: right;
  color: #fff;
  margin-right: 20px;
}
.el-icon-message-solid {
  font-size: 30px;
  margin-top: 5px;
  color: white;
}
.toto {
  font-family: "思源黑体 Bold", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #9137f3;
  padding-left: 20px;
  float: left;
  width: 190px;
  background: #fff;
  height: 70px;
}
.namess {
  color: white;
  font-weight: bold;
  float: right;
  margin-right: 20px;
}
.tub {
  float: right;
}
.tox {
  line-height: 70px;
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 20px;
  float: right;
}
.tos {
  background-color: rgba(145, 55, 243, 1);
  background-image: none;
  height: 70px;
  width: 100%;
  line-height: 70px;
}
</style>