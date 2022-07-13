import React from 'react';
import { render, screen } from 'test-utils';
import { IndexTestingComponent } from './testing';

describe('IndexTestingComponent', () => {
  it('Default testID', () => {
    render(<IndexTestingComponent />);
    const paragraph = screen.getByText('default');

    expect(paragraph).toBeVisible();
  });
});
