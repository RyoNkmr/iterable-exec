# iterable-exec

this is the simple `Iterable` implementation of  `RegExp.prototype.exec`

## Examples

```javascript
import IterableExec from '../src/index.js';

const findingText = 'hoge';
const regex = new RegExp('hoge(?=\\s)', 'g'); // matches "hoge" only followed by whitespaces (lookahead)
const targetText = 'hoge fuga hoge fuga fuga hoge';
```

then:

```javascript
const iterableResult = new IterableExec(regex, targetText);

const [match01, match02, ...rest] = iterableResult;

expect(match01).toHaveProperty('0', 'hoge');
expect(match01).toHaveProperty('index', 0);
expect(match01).toHaveProperty('input', targetText);

expect(match02).toHaveProperty('0', 'hoge');
expect(match02).toHaveProperty('index', 10);
expect(match02).toHaveProperty('input', targetText);

expect(rest).toEqual([]);
```

and can be also used in the *for...of* statement:

```javascript
let index = 0;

for(const match of iterableResult) {
  if (index > 1) {
    throw new Error('Should be stopped')
  }

  if (index === 0) {
    expect(match).toHaveProperty('0', 'hoge');
    expect(match).toHaveProperty('index', 0);
    expect(match).toHaveProperty('input', targetText);
  }

  if (index === 1) {
    expect(match).toHaveProperty('0', 'hoge');
    expect(match).toHaveProperty('index', 10);
    expect(match).toHaveProperty('input', targetText);
  }
  index++;
}
```
