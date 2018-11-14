'use strict';
import {showTip, debug} from "../../util";
import dead from '../dead';

const blood = function (obj) {
  let _blood; // 属性-体质;

  /**
   * 根据体质算出当前血量
   * 当前规则：怪物 1点体质 = 80点血量
   * create at 2018/11/09
   * */
  const getBlood = level => {
    return level * 80;
  };

  const updateBlood = function (newValue) {
    let diff = newValue - obj._valueBloodCurrent;
    if (diff > 0) {
      diff = '+' + diff;
      showTip('fight-monster', diff, '#3fff76');
    } else {
      showTip('fight-monster', diff, '#ff4b55');
    }
    newValue === 0 ? dead() : void 0;
    diff !== 0 ? game.debug ? debug(diff + ' blood') : void 0 : void 0;
  };

  /**
   * 总血量
   * create at 2018/09/30
   * */
  Object.defineProperty(obj, "_valueBloodTotal", {
    get: function () {
      return getBlood(obj._level);
    }
  });

  /**
   * 当前血量
   * create at 2018/09/30
   * */
  Object.defineProperty(obj, "_valueBloodCurrent", {
    set: function (newValue) {
      if (newValue <= getBlood(obj._level)) {
        updateBlood(newValue);
        _blood = newValue;
      } else {
        updateBlood(getBlood(obj._level));
        _blood = getBlood(obj._level);
      }
    },
    get: function () {
      return _blood || getBlood(obj._level);
    }
  });
};
export default blood;