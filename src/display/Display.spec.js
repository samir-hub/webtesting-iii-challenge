// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('Display renders correctly', () => {
  render(<Display />);
});

test('defaults to unlocked and open', () => {
    // Arrange
    const { getByText } = render(<Display />);
    // Act - getting the node by text
    getByText(/unlocked/i);
    getByText(/open/i);
    // Assertion is if ^^^ is truthy
  });