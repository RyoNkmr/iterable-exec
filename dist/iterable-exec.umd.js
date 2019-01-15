/*!
  * iterable-exec v0.0.1
  *
  * @author RyoNkmr
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.IterableExec = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var IterableExec =
  /*#__PURE__*/
  function () {
    function IterableExec(regex, string) {
      _classCallCheck(this, IterableExec);

      this.regex = regex;
      this.string = string;
    }

    _createClass(IterableExec, [{
      key: Symbol.iterator,
      value: function value() {
        var _this = this;

        return {
          next: function next() {
            var value = _this.regex.exec(_this.string);

            return {
              value: value,
              done: value === null
            };
          }
        };
      }
    }]);

    return IterableExec;
  }();

  return IterableExec;

}));
