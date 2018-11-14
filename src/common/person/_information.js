'use strict';
import uuid from 'uuid/v4';
import {personName} from '../../config';
import {arrGetOne} from "../../util";

const information = function (obj) {

  let _id = uuid(), _sex = 0;
  let _name = arrGetOne(personName.first) + arrGetOne(personName.second);
  if (Math.round(Math.random())) {
    _name = _name + arrGetOne(personName.second)
  }

  /**
   * 用户id
   * create at 2018/10/08
   */
  Object.defineProperty(obj, "id", {
    set: function (newValue) {
      _id = newValue;
    },
    get: function () {
      return _id;
    }
  });

  /**
   * 用户名
   * create at 2018/10/08
   */
  Object.defineProperty(obj, "name", {
    set: function (newValue) {
      _name = newValue;
    },
    get: function () {
      return _name;
    }
  });

  /**
   * 用户性别 0 女 1 男
   * create at 2018/10/08
   */
  Object.defineProperty(obj, "sex", {
    set: function (newValue) {
      newValue !== 1 && newValue !== 0 ? void 0 : _sex = newValue;
    },
    get: function () {
      return _sex;
    }
  });
};
export default information;