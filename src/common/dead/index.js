'use strict';
import walk from "../run/_walk";
import {debug} from "../../util";

const dead = function () {
  game.person.info.statusAlive = false;
  game.person.info.statusAttack = false;
  game.debug ? debug('人物死亡') : void 0;
  document.removeEventListener('keydown', walk.start);
  const deadBox = document.createElement('div');
  const deadText = document.createElement('div');
  const deadBg = document.createElement('div');
  const deadImg = document.createElement('div');
  const deadBtn = document.createElement('button');
  deadBox.className = 'dead-box pos-a';
  deadBox.id = 'dead-box';
  deadText.className = 'dead-text pos-a';
  deadImg.className = 'dead-img pos-a';
  deadBtn.className = 'dead-btn pos-a';
  deadText.innerText = '人物死亡';
  deadBtn.innerText = '立即复活';
  deadBg.className = 'dead-bg pos-a';
  deadBox.appendChild(deadBg);
  deadBox.appendChild(deadImg);
  deadBox.appendChild(deadText);
  deadBox.appendChild(deadBtn);
  document.body.appendChild(deadBox);
  deadBtn.onclick = function () {
    game.person.info.statusAlive = true;
    game.person.info.valueBloodCurrent = game.person.info.valueBloodTotal;
    document.addEventListener('keydown', walk.start);
    document.getElementById('dead-box').remove();
    game.debug ? debug('人物复活') : void 0;
  }
};
export default dead;