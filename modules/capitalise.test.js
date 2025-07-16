import { capitaliseFirst } from "./capitalise";

describe('capitlaiseFirst function should', () => {
 
  test('Capitalises only the first letter', () => {
    expect(capitaliseFirst('duck')).toBe('Duck');
  });

  test('Not change any letters only capitalise the first.', () => {
      expect(capitaliseFirst('duck')).not.toBe('Goose')
  });

  test('Not change the other letters to lowercase.', () => {
      expect(capitaliseFirst('DUCK')).not.toBe('Duck')
  })

  test('Return the string unchanged if the first letter is a capital already', () => {
      expect(capitaliseFirst('Duck')).toBe('Duck')
  })

});