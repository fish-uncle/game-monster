'use strict';
import {debug} from "../../util";

const toolBar = function () {

};
toolBar.prototype.init = function () {
  drawToolBar();
  if (window.game.debug) {
    debug('init toolBar success')
  }
};
const drawToolBar = function () {
  const toolBox = document.createElement('div');
  toolBox.id = 'tool-box';
  toolBox.className = 'pos-a tool-box';
  document.body.appendChild(toolBox);
  drawBloodBox();
  drawExperienceBox();
  drawNameBox();
};

const drawNameBox = function () {
  const nameBox = document.createElement('div');
  const nameEle = document.createElement('div');
  const levelEle = document.createElement('div');
  const {name, level} = window.game.person.info;
  nameBox.className = 'name-box pos-a';
  nameEle.className = 'name';
  levelEle.className = 'level';
  levelEle.id = 'level';
  nameEle.innerText = name;
  levelEle.innerText = 'Lv ' + level;
  nameBox.appendChild(nameEle);
  nameBox.appendChild(levelEle);
  document.getElementById('tool-box').appendChild(nameBox);
};

const drawBloodBox = function () {
  const bloodBox = document.createElement('div');
  const blood = document.createElement('div');
  const bloodHide = document.createElement('div');
  bloodBox.className = 'blood-box pos-a';
  blood.className = 'blood pos-a';
  bloodHide.className = 'pos-a blood-hide';
  bloodHide.id = 'blood-hide';
  bloodBox.appendChild(blood);
  bloodBox.appendChild(bloodHide);
  document.getElementById('tool-box').appendChild(bloodBox);
};

const drawExperienceBox = function () {
  const experienceBox = document.createElement('div');
  const experienceGet = document.createElement('div');
  experienceBox.className = 'experience-box pos-a';
  experienceGet.className = 'experience';
  experienceGet.id = 'experience';
  experienceBox.appendChild(experienceGet);
  document.getElementById('tool-box').appendChild(experienceBox);
};
export default toolBar;