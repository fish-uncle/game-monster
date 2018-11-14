'use strict';
import {monsterConfig} from "../../config";
import {arrGetOne, debug} from "../../util";
import meet from "../run/_meet";
import blood from "./_blood";

const monster = function () {
  const _this = this;
  _this.info = [];
  _this.timer = [];
};

monster.prototype.init = function () {
  if (game.debug) {
    debug('init monster success')
  }
  for (let i = 0; i <= 19; i++) {
    game.monster.add(2);
    // game.monster.add(Math.floor(Math.random() * (2 - 1 + 1) + 1));
  }
};
/**
 * 添加怪物
 * create at 2018/10/10
 */
monster.prototype.add = function (level) {
  const config = arrGetOne(monsterConfig);
  const img = config.img;
  const name = config.prefix + config.name + config.suffix;
  const x = Math.floor(Math.random() * (game.width - 10 - 10 + 1) + 10);
  const y = Math.floor(Math.random() * (game.height - 10 - 10 + 1) + 10);
  const _this = this;
  const obj = {
    _name: name,
    _img: img,
    _positionX: x,
    _positionY: y,
    _level: level,
    _valueMagicAttack: level,
    _valueMagicResistance: level > 5 ? level - 1 : 0,
    _valuePhysicsAttack: level,
    _valueSpeed: level,
    _valueArmor: level > 5 ? level - 1 : 0,
    _statusAlive: true,
    _statusAttack: false
  };
  blood(obj);
  if (game.debug) {
    debug('地图刷新一个怪物');
    debug('怪物属性 名称：' + obj._name +
      ' 等级：Lv' + obj._level +
      ' 血量：' + obj._valueBloodTotal +
      ' 物攻：' + obj._valuePhysicsAttack +
      ' 魔攻：' + obj._valueMagicAttack +
      ' 护甲：' + obj._valueArmor +
      ' 魔抗：' + obj._valueMagicResistance +
      ' 速度：' + obj._valueSpeed +
      ' 坐标x：' + obj._positionX +
      ' 坐标y：' + obj._positionY
    );
  }
  let index;

  function insert() {
    index = Math.floor(Math.random() * (100000 - 0 + 1) + 0);
    if (_this.info[index] === undefined) {
      _this.info[index] = obj;
    } else {
      insert();
    }
    if (game.debug) {
      const div = document.createElement('div');
      div.className = 'monster';
      div.style.width = '20px';
      div.style.height = '20px';
      div.style.position = 'absolute';
      div.style.left = (x - 10) + 'px';
      div.style.top = (y - 10) + 'px';
      div.style.backgroundColor = 'rgba(0,0,0,0.6)';
      div.setAttribute('data-index', index);
      document.body.appendChild(div);
    }
  }

  insert();

  /**
   * 怪物等人靠近，触发战斗
   * create at 2018/11/06
   */
  _this.timer[index] = setInterval(function () {
    const diffX = Math.abs(game.person.info.positionX - game.monster.info[index]._positionX);
    const diffY = Math.abs(game.person.info.positionY - game.monster.info[index]._positionY);
    if (diffX <= 20 && diffY <= 20) {
      if (!game.monster.info[index]._statusAttack && game.monster.info[index]._statusAlive) {
        game.monster.info[index]._statusAttack = true;
        meet.draw(game.person.info, index);
      }
    }
  }, 20)
};

/**
 * 怪物死亡
 * create at 2018/10/10
 */
monster.prototype.die = function (num) {
  const _this = this;
  _this.info[num].statusAlive = false;
  _this.info[num].statusAttack = false;
  const monster = document.getElementsByClassName('monster');
  if (game.debug) {
    for (let i = 0; i < monster.length; i++) {
      if (monster[i].getAttribute('data-index') == num) {
        debug('怪物消失 ' + 'lv' + _this.info[num]._level + ' ' + _this.info[num]._name);
        document.body.removeChild(monster[i]);
      }
    }
  }
  clearTimeout(_this.timer[num])
};
export default monster;