'use strict';

const alive = function (obj) {
  let _status_alive = true;
  /**
   * 该状态表示人物是否活着
   * create at 2018/09/30
   */
  Object.defineProperty(obj, "statusAlive", {
    set: function (newValue) {
      typeof newValue === 'boolean' ? _status_alive = newValue : void 0;
    },
    get: function () {
      return _status_alive;
    }
  });
};
export default alive;