'use strict';

const firstName_p = [
  '杨', '孔', '赵', '钱',
  '孙', '李', '沈', '郑',
  '龙', '冯', '马', '董',
  '慕容', '司马', '欧阳', '端木',
  '南宫', '郭'
];
const secondName_p = [
  '美', '俊', '国', '宫',
  '基', '勤', '平', '林',
  '超', '舒', '嘉', '佳',
  '裴', '涛', '莎', '逸',
  '欢', '哲', '泽', '然',
  '文', '兴'
];
const personName = {
  first: firstName_p,
  second: secondName_p
};
const personImg = {
  stand: require('../imgs/person/person.png'),
  down: require('../imgs/person/person-down.png'),
  left: require('../imgs/person/person-left.png'),
  right: require('../imgs/person/person-right.png'),
  up: require('../imgs/person/person-up.png')
};

const monsterConfig = [
  {
    img: require('../imgs/monster/monster-2.png'), name: '狼族勇士', prefix: '受伤的', suffix: ''
  },
  {
    img: require('../imgs/monster/monster-3.png'), name: '骷髅兵', prefix: '瘦弱的', suffix: ''
  },
  {
    img: require('../imgs/monster/monster-1.png'), name: '地狱鬼兵', prefix: '受伤的', suffix: ''
  }
];
export {personName, monsterConfig, personImg}