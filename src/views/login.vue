<template>
  <div class="bg">
    <div class="zjdlu">
      <div class="imglogo">
        <img src="@/assets/login-logo.png" alt />
      </div>
      <div class="dlunr">
        <h1>登录</h1>
        <p>非翔教育后台管理系统</p>

        <el-alert v-if="pd" class="zhmmbzq" title="账号或密码不正确" type="error"></el-alert>
        <el-input class="zhmm" placeholder="请输入账户" v-model="dluzh.zhh" clearable>123</el-input>
        <el-input class="zhmm" placeholder="请输入密码" v-model="dluzh.mmm" show-password></el-input>

        <el-button class="dluan" @click="dianji()" type="primary" plain>登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dluzh: {
        zhh: "",
        mmm: ""
      },
      pd: false
    };
  },
  methods: {
    dianji() {
      if (!this.dluzh.zhh || !this.dluzh.mmm) {
        this.pd = true;
        return false;
      } else {
        this.pd = false;

        localStorage.setItem("user", JSON.stringify(this.dluzh));

        this.$router.push({
          path: "/sy"
        });
      }
    }
  }
};
</script>
<style scoped>
.dlunr h1 {
  border-width: 0px;
  padding-top: 20px;
  font-family: "思源黑体 Bold", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: #9933ff;
}
.dlunr p {
  font-family: "思源黑体 Bold", "思源黑体";
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
  font-style: normal;
  color: #9933ff;
}
.zhmm {
  width: 260px;
  padding-bottom: 10px;
  margin-left: 20px;
}
.zhmmbzq {
  width: 260px;
  margin-bottom: 30px;
  margin-left: 50px;
}
.dluan {
  margin-left: 20px;
  width: 260px;
  height: 44px;
}
.imglogo {
  float: left;
  width: 350px;

  text-align: center;
}
.imglogo img {
  padding-top: 80px;
}
.dlunr {
  width: 350px;
  float: right;
  text-align: center;
}
.zjdlu {
  width: 700px;
  height: 406px;
  background: #fff;
  position: fixed;
  left: 50%;
  margin-left: -350px;
  border-radius: 5px;
  top: 50%;
  margin-top: -203px;
}
.bg {
  width: 100%;
  height: 970px;
  margin: 0px;
  background-color: rgba(255, 255, 255, 0.266666666666667);
  background-image: url("../assets/bg.png");
  background-position: left top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 2400px 1350px;
  position: static;
  left: auto;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
}
</style>