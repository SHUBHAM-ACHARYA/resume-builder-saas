import { describe, it, expect } from 'vitest';
import { isEmail } from '../../src/utils/validation';

describe('isEmail', () => {
  it('validates correct emails', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  it('rejects invalid emails', () => {
    expect(isEmail('not-an-email')).toBe(false);
  });
});
