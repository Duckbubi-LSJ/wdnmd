<template>
  <div>
    <to :names="this.namess1"></to>
    <dhl></dhl>
  </div>
</template>
<script>
import to from "@/components/to.vue";
import dhl from "@/components/dhl.vue";
export default {
  name: "login",
  components: {
    to,
    dhl
  },
  data() {
    return {
      namess1: ""
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      var user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.namess1 = user.zhh;
      }
    }
  }
};
</script>
<style scoped>
</style>