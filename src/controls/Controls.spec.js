// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Dashboard renders correctly', () => {
  render(<Controls />);
});

test('shows controls', () => {
    // Arrange
    const { getByText } = render(<Controls />);
    // Act - getting the node by text
    getByText(/lock gate/i);
    getByText(/close gate/i);
    // Assertion is if ^^^ is truthy
  });