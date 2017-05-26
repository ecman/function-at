'use strict';

Function.prototype.atfirst = function () {
  var firstArgs = arguments;
  return function () {
    var i = firstArgs.length;
    while (i) {
      i -= 1;
      Array.prototype.unshift.call(arguments, firstArgs[i]);
    }
    return this.apply(this, arguments);
  }.bind(this);
};

Function.prototype.atlast = function () {
  var lastArgs = arguments;
  return function () {
    var i = 0;
    while (i < lastArgs.length) {
      Array.prototype.push.call(arguments, lastArgs[i]);
      i += 1;
    }
    return this.apply(this, arguments);
  }.bind(this);
};

Function.prototype.at = function (firstArgs, lastArgs) {
  var newFunc = this.atfirst.apply(this, firstArgs);
  return newFunc.atlast.apply(newFunc, lastArgs);
};

module.exports = true;
