import { capitaliseFirst } from "./capitalise";

describe('capitlaiseFirst function should', () => {
test('Capitalises only the first letter', () => {
  expect(capitaliseFirst('duck')).toBe('Duck');
});

test('Not change any letters only capitalise the first.', () => {
    expect(capitaliseFirst('duck')).not.toBe('Goose')
});
});