import { capitaliseFirst } from "./capitalise";

describe('capitlaiseFirst function should', () => {
 
  test('Capitalises only the first letter', () => {
    expect(capitaliseFirst('duck')).toBe('Duck');
  });

  test('Not change any letters only capitalise the first.', () => {
      expect(capitaliseFirst('duck')).not.toBe('Goose')
  });

  test('Return the string unchanged if the first letter is a capital already', () => {
      expect(capitaliseFirst('Duck')).toBe('Duck')
  })

  test('Change everything but the first letter to lowercase', () => {
      expect(capitaliseFirst('GOOSE')).toBe('Goose')
  })

  test('Change first letter to uppercase and the rest to lowercase', () => {
      expect(capitaliseFirst('gOOSE')).toBe('Goose')
  })

});