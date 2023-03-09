import { validateId, validatePassword } from 'utils';

describe('test Validate', () => {
  test('validate function should pass on correct input', () => {
    const id = 'example';
    expect(validateId(id)).toBe(true);

    const password = 'password1';
    expect(validatePassword(password)).toBe(true);
  });

  test('validate function should fail on incorrect input', () => {
    const id = 'ex';
    expect(validateId(id)).not.toBe(true);

    const password = 'pw';
    expect(validatePassword(password)).not.toBe(true);
  });
});
