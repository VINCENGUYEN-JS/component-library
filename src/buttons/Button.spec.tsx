import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<Button type="submit">Button</Button>);
    expect(screen.getByText('Button')).toHaveAttribute('type', 'submit');
  });
  it('applies valid attribute to element', () => {
    render(<Button aria-label="Test">Button</Button>);
    expect(screen.getByText('Button')).toHaveAttribute('aria-label', 'Test');
  });
});
