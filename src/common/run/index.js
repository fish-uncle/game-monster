'use strict';
import walk from "./_walk";
import {debug} from "../../util";

const run = function () {
};

run.prototype.init = function () {
  document.addEventListener('keydown', walk.start);
  document.addEventListener('keyup', walk.stop);
  if (window.game.debug) {
    debug('init run success')
  }
};
export default run;