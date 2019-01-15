import IterableMatch from '@/lib/IterableMatch';

describe('IterableMatch', () => {
  it('returns each result matched with given regex', () => {
    const findingText = 'hoge';
    const regex = new RegExp('hoge(?=\\s)', 'g');
    const targetText = 'hoge fuga hoge fuga fuga hoge';
    const iterator = new IterableMatch(regex, targetText)[Symbol.iterator]();

    const match01 = iterator.next();
    expect(match01.value).toHaveProperty('0', 'hoge');
    expect(match01.value).toHaveProperty('index', 0);
    expect(match01.value).toHaveProperty('input', targetText);

    const match02 = iterator.next();
    expect(match02.value).toHaveProperty('0', 'hoge');
    expect(match02.value).toHaveProperty('index', 10);
    expect(match02.value).toHaveProperty('input', targetText);

    const match03 = iterator.next();
    expect(match03.value).toBeUndefined();
    expect(match03.done).toBeTruthy();
  });
});
