import { getRandomInt } from "./getRandomInt";

describe('getRandomInt', () => {
 
  test('Should return a number', () => {
    const randomNum = getRandomInt(10)
    expect(typeof randomNum).toBe('number');
  });

  test('Should return a number', () => {
    const randomNum = getRandomInt(10)
    expect(typeof randomNum).not.toBe('string')
  });

});