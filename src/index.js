export default class IterableExec {
  constructor(regex, string) {
    this.regex = regex;
    this.string = string;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        const value = this.regex.exec(this.string);
        return { value, done: value === null };
      },
    };
  }
}
