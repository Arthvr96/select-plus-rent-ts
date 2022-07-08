import React from 'react';
import { render, screen } from 'test-utils';
import NavigationList from './NavigationList';
import { routes } from './NavigationList';

describe('Testing Navigation List', () => {
  it('Correctly render every one link from the list', () => {
    render(<NavigationList />);
    routes.forEach((el) => {
      const link = screen.getByText(el[0]).closest('a');
      expect(link).toHaveAttribute('href', el[1]);
    });
  });
});
