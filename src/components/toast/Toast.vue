<template>
  <transition name="fade">
    <div class="message-wrap" v-if="isShow">
      <p >
        {{msg}}
      </p>
    </div>
  </transition>
</template>
<script>

export default {
  data() {
    return {
      msg: '',
      isShow: true,
    };
  },
  computed: {
  },
  created() {
    const that = this;
    this.$nextTick(() => {
      setTimeout(() => {
        that.isShow = false;
      }, 1500);
    });
  },
  methods: {
    setDate(msg) {
      this.msg = msg;
    },
  },
  components: {
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
    margin-left: -35vw;
    margin-top: -1rem;
    width: 70vw;
    min-height: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: @font-level-1;
    border-radius: 4px;
    padding: 0.1rem;
    p {
      color: white;
      font-size: 0.4rem;
      line-height: 0.5rem;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
