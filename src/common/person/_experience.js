'use strict';
import {showTip,debug} from "../../util";

const experience = function (obj) {
  let _experience = 0, _level = 1;

  const levelUp = function (newValue) {
    const {experienceTotal} = game.person.info;
    const diff = newValue - experienceTotal;
    _level++;
    game.person.info.experienceCurrent = diff;
    game.debug ? debug('level up!') : void 0;
    document.getElementById('level').innerText = _level;
    const scale = diff / experienceTotal >= 1 ? 1 : diff / experienceTotal;
    document.getElementById('experience').style.width = scale * 100 + '%';
  };

  const updateExperience = function (newValue) {
    const {experienceCurrent, experienceTotal} = game.person.info;
    let diff = newValue - experienceCurrent;
    if (newValue >= experienceTotal) {
      levelUp(newValue);
      diff = '+' + diff;
      showTip('fight-person', diff, '#fff427');
    } else {
      if (diff > 0) {
        diff = '+' + diff;
        showTip('fight-person', diff, '#333');
        _experience = newValue;
      } else if (diff < 0) {
        showTip('fight-person', diff, '#333');
        _experience = newValue;
      }
      const scale = newValue / experienceTotal >= 1 ? 1 : newValue / experienceTotal;
      document.getElementById('experience').style.width = scale * 100 + '%';
    }
    if (diff !== 0) {
      game.debug ? debug(diff + ' Exp') : void 0;
    }
  };

  /**
   * 根据等级算出需要的经验值
   * 当前规则：2的(n-1)次方
   * create at 2018/09/30
   * */
  const getExperience = val => {
    return Math.pow(2, val - 1) * 100;
  };

  Object.defineProperty(obj, "experienceTotal", {
    get: function () {
      return getExperience(game.person.info.level);
    }
  });

  Object.defineProperty(obj, "experienceCurrent", {
    set: function (newValue) {
      updateExperience(newValue);
    },
    get: function () {
      return _experience;
    }
  });

  Object.defineProperty(obj, "level", {
    get: function () {
      return _level;
    }
  });
};
export default experience;