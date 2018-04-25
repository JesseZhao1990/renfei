/**
 * 进入vue程序首要做的事就是根本屏幕宽度，动态赋予当前屏幕的 rem 数值
 */
// eslint-disable-next-line
(function (doc, win) {
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = () => {
    const docEl = document.documentElement;
    const { clientWidth } = docEl;
    if (!clientWidth) return;
    docEl.style.fontSize = `${100 * (clientWidth / 1080)}px`;
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
