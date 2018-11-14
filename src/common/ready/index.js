'use strict';
const ready = function () {
  window.game = {};

  /**
   * 添加工作区宽高
   * create at 2018/10/08
   */
  if (window.innerWidth) {
    window.game.width = window.innerWidth - 34;
  } else if ((document.body) && (document.body.clientWidth)) {
    window.game.width = document.body.clientWidth - 34;
  }
  if (window.innerHeight) {
    window.game.height = window.innerHeight - 196;
  } else if ((document.body) && (document.body.clientHeight)) {
    window.game.height = document.body.clientHeight - 196;
  }

  function addEvent(el, name, fn) {
    if (el.addEventListener) return el.addEventListener(name, fn, false);
    return el.attachEvent('on' + name, fn);
  }

  /**
   * 页面离开时判断
   * create at 2018/11/06
   */
  function leave(_e) {
    const e = window.event || _e;
    if (game.person.info.statusAttack) {
      e.returnValue = ("你正在战斗，确认离开吗？");
    }
  }

  window.onbeforeunload = function () {
    leave();
  };

  addEvent(window, 'pagehide', leave);
};
export default ready;