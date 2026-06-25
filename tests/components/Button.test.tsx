import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from '../../src/components/ui/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button />);
    expect(container).toBeTruthy();
  });
});
