'use strict';
import walk from './_walk';
import {debug} from "../../util";

let timer;

/**
 * draw fight
 *
 * change statusAttack
 * show user and monster
 * create at 2018/10/08
 */
function draw(person, monster_index) {
  document.removeEventListener('keydown', walk.start);
  game.debug ? debug('遇到怪物') : void 0;
  game.person.info.statusAttack = true;
  const fightBox = document.createElement('div');
  const fightAnimation = document.createElement('div');
  const fightText = document.createElement('div');
  const fightText1 = document.createElement('span');
  const fightText2 = document.createElement('span');
  const fightUser = document.createElement('img');
  const fightMonster = document.createElement('img');
  const fightEscape = document.createElement('button');
  const fightStart = document.createElement('button');
  fightText1.innerText = '战斗';
  fightText2.innerText = '开始';
  fightEscape.innerText = '逃跑';
  fightStart.innerText = '战斗';
  fightEscape.className = 'fight-escape pos-a';
  fightStart.className = 'fight-start pos-a';
  fightBox.className = 'fight-box';
  fightBox.id = 'fight-box';
  fightText.className = 'fight-text pos-a';
  fightAnimation.className = 'fight-animation pos-a';
  fightUser.className = 'fight-person pos-a';
  fightUser.id = 'fight-person';
  fightMonster.className = 'fight-monster pos-a';
  fightMonster.id = 'fight-monster';
  fightUser.setAttribute('src', person.img);
  fightMonster.setAttribute('src', game.monster.info[monster_index]._img);
  fightText.appendChild(fightText1);
  fightText.appendChild(fightText2);
  fightBox.appendChild(fightAnimation);
  fightBox.appendChild(fightText);
  fightBox.appendChild(fightEscape);
  fightBox.appendChild(fightStart);
  fightBox.appendChild(fightUser);
  fightBox.appendChild(fightMonster);
  document.body.appendChild(fightBox);
  fightEscape.onclick = function () {
    clearTimeout(timer);
    end(monster_index);
  };
  fightStart.onclick = function () {
    start(monster_index);
  }
}

/**
 * start fight
 *
 * change statusAttack
 * show user and monster
 * create at 2018/10/08
 */
function start(monster_index) {
  game.debug ? debug('战斗开始') : void 0;
  let {valuePhysicsAttack, valueArmor, valueMagicResistance, valueMagicAttack} = game.person.info;
  let {_valuePhysicsAttack, _valueArmor, _valueMagicResistance, _valueMagicAttack} = game.monster.info[monster_index];
  timer = setInterval(function () {
    if (game.person.info.statusAlive && game.monster.info[monster_index]._statusAlive) {
      const phy_person = valuePhysicsAttack - _valueArmor > 0 ? valuePhysicsAttack - _valueArmor : 0;
      const mag_person = valueMagicAttack - _valueMagicResistance > 0 ? valueMagicAttack - _valueMagicResistance : 0;
      const phy_monster = _valuePhysicsAttack - valueArmor > 0 ? _valuePhysicsAttack - valueArmor : 0;
      const mag_monster = _valueMagicAttack - valueMagicResistance > 0 ? _valueMagicAttack - valueMagicResistance : 0;
      document.getElementById('fight-person').className='fight-person pos-a fight-left';
      setTimeout(function () {
        document.getElementById('fight-person').className='fight-person pos-a';
        document.getElementById('fight-monster').className='fight-monster pos-a fight-right';
        game.monster.info[monster_index]._valueBloodCurrent = game.monster.info[monster_index]._valueBloodCurrent - (phy_person + mag_person);
      },300);
      setTimeout(function () {
        document.getElementById('fight-monster').className='fight-monster pos-a';
        game.person.info.valueBloodCurrent = game.person.info.valueBloodCurrent - (phy_monster + mag_monster);
      },600)
    } else {
      clearTimeout(timer);
      end(monster_index);
    }
  }, 1000)
}

/**
 * end fight
 *
 * change statusAttack
 * show user and monster
 * create at 2018/10/08
 */
function end(monster_index) {
  game.debug ? debug('战斗结束') : void 0;
  game.person.info._statusAttack = false;
  game.monster.die(monster_index);
  game.monster.add(game.monster.info[monster_index]._level);
  document.getElementById('fight-box').remove();
  document.addEventListener('keydown', walk.start);
}

const meet = {
  draw: draw,
  end: end,
};
export default meet;