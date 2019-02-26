<template>
  <div class="app">
    <!-- <el-container> -->
      <!-- <el-aside class="left-container"> -->
        <LeftLayout />
      <!-- </el-aside> -->
      <!-- <el-main> -->
        <router-view class="main-container" />
      <!-- </el-main> -->
    <!-- </el-container> -->

    <!-- <bga-back-top :svgMajorColor="'#7b79e5'" :bottom="90" :right="5" :svgMinorColor="'#ba6fda'" :svgType="'rocket_smoke'" /> -->
  </div>

</template>



<script>
import LeftLayout from "@/components/LeftLayout.vue";

export default {
  name: "App",
  data() {
    return {
      activeIndex: "1"
    };
  },
  components: {
    LeftLayout
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang = "scss">
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
