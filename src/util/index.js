'use strict';
const debug = text => {
  console.log('[debug] ' + text)
};
const arrGetOne = function (arr) {
  const length = arr.length - 1;
  const index = Math.round(Math.random() * length);
  return arr[index]
};
const isNumber = function (val) {
  if (val === null || val === '' || typeof val !== 'number') {
    return false
  } else {
    return !isNaN(val)
  }
};
const isIntNum = function (val) {
  const regPos = / ^\d+$/; // 非负整数
  const regNeg = /^\-[1-9][0-9]*$/; // 负整数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
};

/**
 * show tip
 *
 * e.g. blood updated need to show number
 *      experience updated need to show number
 * create at 2018/10/09
 */
const showTip = function (ele, text, color) {
  const tip = document.createElement('i');
  const element = document.getElementById(ele);
  if (!element) {
    return false;
  }
  const left = element.offsetLeft;
  const mLeft = element.style.left;
  const top = element.offsetTop;
  const mTop = element.style.top;
  tip.className = 'tip pos-a';
  color ? tip.style.color = color : void 0;
  tip.innerText = text;
  tip.style.left = left + 'px';
  tip.style.top = top + 'px';
  tip.style.marginLeft = (mLeft + 66) + 'px';
  tip.style.marginTop = (mTop + 30) + 'px';
  document.body.appendChild(tip);
  setTimeout(function () {
    tip.remove();
  }, 1000)
};

export {arrGetOne, isNumber, isIntNum, showTip, debug}