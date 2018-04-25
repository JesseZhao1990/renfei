/**
 * 给header的title赋值的指令
 * 注意，此指令只需要在app.vue中使用一次即可。别处不再需要使用
 * @param {*} Vue
 */

function install(Vue) {
  function setTitle(el, binding) {
    const title = binding.value;
    const img = el.getAttribute('img') || '';

    if (typeof title === 'undefined' || window.document.title === title) {
      return;
    }
    document.title = title;
    // 由于微信的bug导致直接给document.title赋值无效，所以如果是ios系统，则利用iframe的方式去改变title
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';

      iframe.setAttribute('src', img || '');

      const iframeCallback = () => {
        setTimeout(() => {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe);
        }, 0);
      };

      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe);
    }
  }

  Vue.directive('header-title', {
    bind: setTitle,
    update: setTitle,
  });
}


export default {
  install,
};

