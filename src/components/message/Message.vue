<template>
  <transition name="fade">
  <div class="message-wrap" v-if="isShow">
    <p >
       <Icon :iconName="type" class="icon" :class="type"></Icon>
      <i v-if="msg">{{msg}}</i>
    </p>
  </div>
  </transition>
</template>
<script>
import Icon from '../basic/Icon';

export default {
  data() {
    return {
      type: '',
      msg: '',
      isShow: true,
    };
  },
  computed: {
  },
  created() {
    const that = this;
    this.$nextTick(() => {
      if (this.type !== 'loading') {
        setTimeout(() => {
          that.isShow = false;
        }, 1500);
      }
    });
  },
  methods: {
    setDate(type, msg) {
      this.type = type;
      this.msg = msg;
    },
    closeLoading() {
      this.isShow = false;
    },
  },
  components: {
    Icon,
  },
};

</script>
<style lang="less" scoped>
  @import "../../styles/variables";
  .message-wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999999;
    margin-left: -1.56rem;
    margin-top: -1.53rem;
    width: 3.12rem;
    height: 3.06rem;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: @font-level-1;
    border-radius: 4px;
    .icon{
      width: 0.92rem;
      height: 0.92rem;
      fill: #fff;
      margin-bottom: 0.48rem;
    }
    i{
      display: block;
      color: #ffffff;
      font-size: 0.46rem;
      max-width: 2.5rem;
      height: 0.46rem;
      line-height: 0.46rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    p{
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .loading{
      margin-bottom: 0;
      animation: loading 5s linear infinite;
    }
    @keyframes loading {
      from {
        transform: rotate(0);
      }
      25% {
        transform: rotate(90deg);
      }

      50% {
        transform: rotate(180deg);
      }
      75%{
        transform: rotate(270deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /*.wraning {
      text-align: center;
    }*/
    /*.success {
      text-align: center;
      color: @color-reminder-click;
      fill: @color-reminder-click;
      background-color: rgb(240,249,235);
    }*/
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
