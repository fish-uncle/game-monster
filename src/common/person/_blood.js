'use strict';
import {isNumber, showTip, debug} from "../../util";
import dead from '../dead';

const blood = function (obj) {
  let _blood, _attribute_constitution = 1; // 属性-体质;

  /**
   * 根据体质算出当前血量
   * 当前规则：人类 1点体质 = 100点血量
   * create at 2018/09/30
   * */
  const getBlood = val => {
    return val * 100;
  };

  const updateBlood = function (newValue) {
    const {valueBloodCurrent, valueBloodTotal} = game.person.info;
    let diff = newValue - valueBloodCurrent;
    const bloodB = 100 - (newValue / valueBloodTotal * 100);
    document.getElementById('blood-hide').style.height = bloodB + '%';
    if (diff > 0) {
      diff = '+' + diff;
      showTip('fight-person', diff, '#3fff76');
    } else {
      showTip('fight-person', diff, '#ff4b55');
    }
    newValue === 0 ? dead() : void 0;
    diff !== 0 ? game.debug ? debug(diff + ' blood') : void 0 : void 0;
  };

  /**
   * 体质值
   * create at 2018/09/30
   * */
  Object.defineProperty(obj, "attributeConstitution", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_constitution = newValue : void 0;
    },
    get: function () {
      return _attribute_constitution;
    }
  });

  /**
   * 总血量
   * create at 2018/09/30
   * */
  Object.defineProperty(obj, "valueBloodTotal", {
    get: function () {
      return getBlood(obj.attributeConstitution);
    }
  });

  /**
   * 当前血量
   * create at 2018/09/30
   * */
  Object.defineProperty(obj, "valueBloodCurrent", {
    set: function (newValue) {
      if (newValue <= getBlood(obj.attributeConstitution)) {
        updateBlood(newValue);
        _blood = newValue;
      } else {
        updateBlood(getBlood(obj.attributeConstitution));
        _blood = getBlood(obj.attributeConstitution);
      }
    },
    get: function () {
      return _blood || getBlood(obj.attributeConstitution);
    }
  });
};
export default blood;