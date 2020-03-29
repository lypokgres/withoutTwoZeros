import withoutTwoZeros from '../src/index.js';

test('withoutTwoZeros', () => {
    expect(withoutTwoZeros(1, 1)).toBe(2);
    expect(withoutTwoZeros(3, 1)).toBe(0);
    expect(withoutTwoZeros(4, 6)).toBe(35);
    expect(withoutTwoZeros(6, 8)).toBe(84);
    expect(withoutTwoZeros(5, 6)).toBe(21);
});