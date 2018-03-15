<template>
    <el-container>
        <el-aside class="left-container">
            <LeftLayout />
        </el-aside>
        <el-main>
            <router-view class="main-container" />
        </el-main>
    </el-container>
</template>
<script>
import LeftLayout from "./components/LeftLayout.vue";
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
