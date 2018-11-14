'use strict';
const position = function (obj) {
  let _position_x = 0, _position_y = 0, _walk = false;

  Object.defineProperty(obj, "positionX", {
    set: function (newValue) {
      if (newValue > 0 && newValue <= window.game.width) {
        _position_x = newValue;
        const person = document.getElementById('person');
        person.style.left = newValue + 'px';
      }
    },
    get: function () {
      return _position_x;
    }
  });

  Object.defineProperty(obj, "positionY", {
    set: function (newValue) {
      if (newValue > 0 && newValue <= window.game.height) {
        _position_y = newValue;
        const person = document.getElementById('person');
        person.style.top = newValue + 'px';
      }
    },
    get: function () {
      return _position_y;
    }
  });

  Object.defineProperty(obj, "statusWalk", {
    set: function (newValue) {
      _walk = newValue;
    },
    get: function () {
      return _walk;
    }
  });
};
export default position;