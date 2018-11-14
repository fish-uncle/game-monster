'use strict';
import blood from './_blood';
import experience from './_experience';
import position from './_position';
import alive from './_alive';
import information from './_information';
import attribute from './_attribute';
import gold from './_gold';
import {debug} from "../../util";

const personImg = require('../../imgs/person/person.png');
const person = function () {
  const _this = this;

  let _status_attack = false; // 攻击状态
  _this.info = {};
  blood(_this.info);
  experience(_this.info);
  position(_this.info);
  alive(_this.info);
  information(_this.info);
  attribute(_this.info);
  gold(_this.info);

  Object.defineProperty(_this.info, "img", {
    get: function () {
      return personImg;
    }
  });

  Object.defineProperty(_this.info, "statusAttack", {
    set: function (newValue) {
      typeof newValue === 'boolean' ? _status_attack = newValue : void 0;
    },
    get: function () {
      return _status_attack;
    }
  });
};

person.prototype.init = function () {
  drawPerson();
  window.game.debug ? debug('init person success') : void 0;
};

const drawPerson = function () {
  const user = document.createElement('div');
  user.className = 'pos-a person';
  user.id = 'person';
  let {positionX, positionY} = game.person.info;
  user.style.left = positionX + 'px';
  user.style.top = positionY + 'px';
  user.style.backgroundImage = 'url(' + personImg + ')';
  document.body.appendChild(user);
};

export default person;