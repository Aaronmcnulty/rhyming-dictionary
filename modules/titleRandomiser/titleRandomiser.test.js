import { titleRandomiser } from "./titleRandomiser";
import { titleRhymesArray } from "./titleRandomiser";

describe('titleRandomiser', () => {
 
  test('Should return a string', () => {
    const newTitle = titleRandomiser()
    expect(typeof newTitle).toBe('string');
  });

  test('Should NOT return a number or object/array', () => {
    const newTitle = titleRandomiser()
    expect(typeof newTitle).not.toBe('number');
    expect(typeof newTitle).not.toBe('object');
  });

  test('Should return a string starting with "RHYME "', () => {
    const newTitle = titleRandomiser()
    expect(newTitle.startsWith('RHYME ')).toBe(true);
  });

  test('Should not return a string without "RHYME " at the start', () => {
    const newTitle = titleRandomiser()
    expect(newTitle.startsWith('RHYME ')).not.toBe(false);
  });

  test('Should NOT return a string with all lower case letters', () => {
    const newTitle = titleRandomiser()
    expect(newTitle !== newTitle.toLocaleLowerCase()).toBe(true);
  });

  test('Should return a string in all upper case letters.', () => {
    const newTitle = titleRandomiser()
    expect(newTitle == newTitle.toUpperCase()).toBe(true);
  });

});
