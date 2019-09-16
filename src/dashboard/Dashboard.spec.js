// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
  render(<Dashboard />);
});

test('shows controls', () => {
    // Arrange
    const { getByText } = render(<Dashboard />);
    // Act - getting the node by text
    getByText(/lock gate/i);
    getByText(/close gate/i);
    // Assertion is if ^^^ is truthy
  });

