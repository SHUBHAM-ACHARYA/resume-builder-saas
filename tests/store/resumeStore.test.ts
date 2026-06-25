import { describe, it, expect } from 'vitest';
import { useResumeStore } from '../../src/store/resumeStore';

describe('resumeStore', () => {
  it('starts with no resume', () => {
    expect(useResumeStore.getState().resume).toBeNull();
  });
});
