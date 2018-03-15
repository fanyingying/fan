<template>
  <ul class="label-list">
    <li @click="setActiveLabel(null)">
      <span class="tag" v-if="!activeLabel" style="background-color: #3593f2;">ALL</span>
      <span class="tag tag-unchecked" v-else>ALL</span>
    </li>
    <li v-for="label in labels" :key="label.id" @click="setActiveLabel(label)">
      <span class="tag" v-if="activeLabel && activeLabel.name === label.name" :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
      <span v-else class="tag tag-unchecked">{{label.name}}</span>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data(){
    return{
      labels:[]
    }
  },
  computed: {
    ...mapGetters([ "activeLabel"])
  },
  methods: {
    ...mapActions(["setLabels", "updateActiveLabel"]),
    setActiveLabel(label) {
      if (this.$route.name === "BlogDetail") {
        this.updateActiveLabel(label);
        this.$router.push("/");
      } else {
        if (this.activeLabel && label && this.activeLabel.name === label.name) {
          this.updateActiveLabel(null);
        } else {
          this.updateActiveLabel(label);
        }
      }
    },
    getLabels() {
      this.$gitHubApi
        .getLabels(this)
        .then(response => {
          // 加载完后填充数据数据后滚动到顶部
          this.labels = response.data;
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      //视图加载完成后执行
      this.getLabels();
    });
  }
};
</script>
