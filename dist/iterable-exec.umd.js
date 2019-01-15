(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.IterableExec = factory());
}(this, function () { 'use strict';

  class IterableMatch {
    constructor(regex, string) {
      this.regex = regex;
      this.string = string;
    }

    [Symbol.iterator]() {
      return {
        next: () => {
          const lastIndexed = this.regex.exec(this.string);
          return lastIndexed !== null ? { value: lastIndexed, done: false } : { done: true };
        },
      };
    }
  }

  return IterableMatch;

}));
