
import { describe } from 'riteway';
import { randomNumber } from './index.html';describe('randomNumber', async assert => {
  const start = 3;
  const end = 20;
  const numbers = Array.from({ length: 100 }, () => randomNumber(start, end));assert({
    given: 'start, end',
    should: 'generate a random number greater than or equal to start',
    actual: numbers.every(n => n >= start),
    expected: true
  });assert({
    given: 'start, end',
    should: 'generate a random number less than or equal to end',
    actual: numbers.every(n => n <= end),
    expected: true
  });
});