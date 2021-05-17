import { toLastNames, addValues } from './code-challenge-12.js';


test('full names', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const actual = toLastNames(input);
  expect(actual).toEqual(['Jane Doe', 'James Bond']);
});

test('given an array of numbers as input, uses reduce to add the values in the array', () => {
  const input = [1, 2, 3, 4, 5];
  const actual = addValues(input);
  expect(actual).toEqual([15]);
});