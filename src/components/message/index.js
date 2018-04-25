/**
 * Created by Administrator on 2017/12/13.
 */

/*
* 弹窗组件
* 使用this.$message(type, msg）
* @params type:类型
* @params msg: 信息
* */
/* eslint-disable */
import message from './Message';
message.install = function (Vue) {
  Vue.prototype.$message = function (type, msg) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const msgInt = new Vue({
      components: { message },
      template: '<message></message>'
    });
    msgInt.$mount(div);
    msgInt.$children[0].setDate(type, msg);
    return msgInt.$children[0];
  };

  Vue.component('Message', message);
};

export default message;
