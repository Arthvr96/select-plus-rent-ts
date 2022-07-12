import React from 'react';
import { render, screen } from 'test-utils';
import { ParallaxPlaceholder } from './ParallaxPlaceholder';

describe('ParallaxPlaceholder', () => {
  it('should has correctly height passed as prop', () => {
    render(<ParallaxPlaceholder data-testid="testEl" height={'123vh'} />);
    const el = screen.getByTestId('testEl');
    expect(el).toHaveStyle({
      height: '123vh',
    });
  });
});
