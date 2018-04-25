<template>
  <div id="app" >
    <router-view/>
    <div v-header-title="$route.meta.title"></div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'app',
    data() {
      return {
      };
    },
    created() {
    },
    methods: {
    },
  };
</script>

<style lang="less">
@import './styles/variables.less';
  #app {
    height: 100%;
  }
</style>
