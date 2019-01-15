import IterableExec from '../src/index.js';

describe('IterableExec', () => {
  const findingText = 'hoge';
  const regex = new RegExp('hoge(?=\\s)', 'g');
  const targetText = 'hoge fuga hoge fuga fuga hoge';
  let iterableResult;

  beforeEach(() => {
    iterableResult = new IterableExec(regex, targetText);
  });

  it('returns each results matched with given regex', () => {
    const [match01, match02, ...rest] = iterableResult;

    expect(match01).toHaveProperty('0', 'hoge');
    expect(match01).toHaveProperty('index', 0);
    expect(match01).toHaveProperty('input', targetText);

    expect(match02).toHaveProperty('0', 'hoge');
    expect(match02).toHaveProperty('index', 10);
    expect(match02).toHaveProperty('input', targetText);

    expect(rest).toEqual([]);
  });

  test('used in for', () => {
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
  });
});
