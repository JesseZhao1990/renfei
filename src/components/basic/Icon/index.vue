<template>
  <logo v-if="this.iconName=='logo'" :width="width" :height="height" :fill="color"></logo>
  <admin v-else-if="this.iconName=='admin'" :width="width" :height="height" :fill="color"></admin>
  <cup v-else-if="this.iconName=='cup'" ></cup>
  <cupAngle v-else-if="this.iconName=='cupAngle'" ></cupAngle>
  <hot v-else-if="this.iconName=='hot'" ></hot>
  <hotAngle v-else-if="this.iconName=='hotAngle'" ></hotAngle>
  <phone v-else-if="this.iconName=='phone'" ></phone>
  <yzm v-else-if="this.iconName=='yzm'" ></yzm>
  <warning v-else-if="this.iconName=='warning'" ></warning>
  <hook v-else-if="this.iconName=='hook'" ></hook>
  <close v-else-if="this.iconName=='close'"  :fill="color"></close>
  <success v-else-if="this.iconName=='success'"  :fill="color"></success>
  <error v-else-if="this.iconName=='error'"  :fill="color"></error>
  <loading v-else-if="this.iconName=='loading'"  :fill="color"></loading>
  <span v-else > 图标缺失</span>
</template>

<script>

export default {
  components: {
    logo: () => import('./Svgs/logo'),
    admin: () => import('./Svgs/admin'),
    cup: () => import('./Svgs/cup'),
    cupAngle: () => import('./Svgs/cupAngle'),
    hot: () => import('./Svgs/hot'),
    hotAngle: () => import('./Svgs/hotAngle'),
    phone: () => import('./Svgs/phone'),
    yzm: () => import('./Svgs/yzm'),
    warning: () => import('./Svgs/warning'),
    hook: () => import('./Svgs/hook'),
    close: () => import('./Svgs/close'),
    success: () => import('./Svgs/success'),
    error: () => import('./Svgs/error'),
    loading: () => import('./Svgs/loading'),
  },
  props: {
    iconName: {
      type: String,
    },
    width: {
      type: String,
      default: '30',
    },
    height: {
      type: String,
      default: '30',
    },
    color: {
      type: String,
      default: '#5a5e66',
    },
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>

</style>



