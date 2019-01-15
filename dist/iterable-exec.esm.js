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

export default IterableMatch;
