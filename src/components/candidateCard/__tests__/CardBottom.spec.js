import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardBottom from '../cardBottom';

// TODO: Add dynamic testing for multiple buttons & deactivated state

test('Button exists', () => {
  render(<CardBottom />);
  expect(screen.getByRole('button')).toBeDefined();
});

test('Button View Profile is active', () => {
  render(<CardBottom />);
  expect(screen.getByRole('button')).toHaveTextContent('View profile')
});