/**
 * Created by Administrator on 2018/1/16.
 */
/*
 * 弹窗组件
 * 使用this.$message(type, msg）
 * @params type:类型
 * @params msg: 信息
 * */
/* eslint-disable */
import toast from './Toast.vue';
toast.install = function (Vue) {
  Vue.prototype.$toast = function ( msg) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const msgInt = new Vue({
      components: { toast },
      template: '<toast></toast>'
    });
    msgInt.$mount(div);
    msgInt.$children[0].setDate( msg);
  };

  Vue.component('Toast', toast);
};

export default toast;
