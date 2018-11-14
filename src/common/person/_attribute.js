'use strict';
import {isNumber} from "../../util";

const attribute = function (obj) {

  let
    _attribute_power = 1, // 属性-力量
    _attribute_wisdom = 1, // 属性-智慧
    _attribute_toughness = 1, // 属性-韧性
    _attribute_resistance = 1, // 属性-抗性
    _attribute_agile = 1; // 属性-敏捷

  Object.defineProperty(obj, "attributePower", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_power = newValue : void 0;
    },
    get: function () {
      return _attribute_power;
    }
  });

  Object.defineProperty(obj, "attributeWisdom", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_wisdom = newValue : void 0;
    },
    get: function () {
      return _attribute_wisdom;
    }
  });

  Object.defineProperty(obj, "attributeToughness", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_toughness = newValue : void 0;
    },
    get: function () {
      return _attribute_toughness;
    }
  });

  Object.defineProperty(obj, "attributeAgile", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_agile = newValue : void 0;
    },
    get: function () {
      return _attribute_agile;
    }
  });

  Object.defineProperty(obj, "attributeResistance", {
    set: function (newValue) {
      isNumber(newValue) ? _attribute_resistance = newValue : void 0;
    },
    get: function () {
      return _attribute_resistance;
    }
  });

  Object.defineProperty(obj, "valuePhysicsAttack", {
    get: function () {
      // 1点力量 = 2点物理攻击
      return obj.attributePower * 2;
    }
  });

  Object.defineProperty(obj, "valueMagicAttack", {
    get: function () {
      // 1点智慧 = 2点魔法攻击
      return obj.attributeWisdom * 2;
    }
  });

  Object.defineProperty(obj, "valueArmor", {
    get: function () {
      // 1点韧性 = 1点护甲
      return obj.attributeToughness * 1;
    }
  });

  Object.defineProperty(obj, "valueMagicResistance", {
    get: function () {
      // 1点抗性 = 1点魔抗
      return obj.attributeResistance * 1;
    }
  });

  Object.defineProperty(obj, "valueSpeed", {
    get: function () {
      // 1点敏捷 = 1点速度
      return obj.attributeAgile * 1;
    }
  });
};
export default attribute;