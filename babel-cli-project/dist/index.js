"use strict";

var addNum = function addNum() {
  var numOne = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var numbTwo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return numOne + numbTwo;
};

addNum();