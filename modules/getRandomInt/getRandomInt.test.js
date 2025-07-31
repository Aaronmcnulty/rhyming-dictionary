import { getRandomInt } from "./getRandomInt";

describe('getRandomInt', () => {
 
  test('Should return a number', () => {
    const randomNum = getRandomInt(10)
    expect(typeof randomNum).toBe('number');
  });

  test('Should NOT return a string', () => {
    const randomNum = getRandomInt(10)
    expect(typeof randomNum).not.toBe('string')
  });

  test('Should return a number less or equal to the input argument', () => {
    const randomNum = getRandomInt(1)
    expect(randomNum <= 1).toBe(true)
  });

  test('Should NOT return a number greater than the input argument', () => {
    const randomNum = getRandomInt(1)
    expect(randomNum > 1).toBe(false)
  });

  test('Returned number should be greater or equal to 0', () => {
    const randomNum = getRandomInt(1)
    expect(randomNum > -1).toBe(true)
  });

});