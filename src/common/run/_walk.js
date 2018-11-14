'use strict';
import {personImg} from "../../config";

const runKey = {down: 40, left: 37, up: 38, right: 39};

function startEvent(event) {
  let {positionX, positionY, statusAlive, valueSpeed} = game.person.info;
  const user = document.getElementById('person');
  user.className = 'person walk pos-a';
  if (statusAlive) {
    if (event.keyCode === runKey.left) {
      positionX = positionX - valueSpeed < 0 ? 0 : positionX - valueSpeed;
      user.style.backgroundImage = 'url(' + personImg.left + ')';
    }
    if (event.keyCode === runKey.up) {
      positionY = positionY - valueSpeed < 0 ? 0 : positionY - valueSpeed;
      user.style.backgroundImage = 'url(' + personImg.up + ')';
    }
    if (event.keyCode === runKey.right) {
      positionX = positionX + valueSpeed > window.game.width ? window.game.width : positionX + valueSpeed;
      user.style.backgroundImage = 'url(' + personImg.right + ')';
    }
    if (event.keyCode === runKey.down) {
      positionY = positionY + valueSpeed > window.game.height ? window.game.height : positionY + valueSpeed;
      user.style.backgroundImage = 'url(' + personImg.down + ')';
    }
    game.person.info.positionX = positionX;
    game.person.info.positionY = positionY;
  }
  game.person.info.statusWalk === true ? void 0 : game.person.info.statusWalk = true;
}

function stopEvent(event) {
  if (event.keyCode === runKey.left || event.keyCode === runKey.right || event.keyCode === runKey.up || event.keyCode === runKey.down) {
    const user = document.getElementById('person');
    user.className = 'person pos-a';
    user.style.backgroundImage = 'url(' + personImg.stand + ')';
    game.person.info.statusWalk = false;
  }
}

const walk = {
  start: startEvent,
  stop: stopEvent,
};
export default walk;