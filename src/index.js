'use strict';
import _person from './common/person';
import _ready from './common/ready';
import _toolBar from './common/toolBar';
import _run from './common/run';
import _monster from './common/monster';
import './less/game.less';

_ready();
window.game.debug = true;
window.game.person = new _person();
window.game.person.init();
window.game.toolBar = new _toolBar();
window.game.toolBar.init();
window.game.monster = new _monster();
window.game.monster.init();
const run = new _run();
run.init();