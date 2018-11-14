'use strict';
import {isNumber} from "../../util";

const gold = function (obj) {
  let _gold = 0;
  /**
   * 金币
   * create at 2018/10/09
   */
  Object.defineProperty(obj, "gold", {
    set: function (newValue) {
      isNumber(newValue) ? _gold = newValue : void 0;
    },
    get: function () {
      return _gold;
    }
  });
};
export default gold;