import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import HamburgerButton from './HamburgerButton';

describe('HamburgerButton', () => {
  it('should render hamburger button in variant opened', () => {
    render(<HamburgerButton isOpen={true} toggleHamburger={() => {}} />);
    const button = screen.getByText('Opened hamburger button');
    expect(button).toBeVisible();
  });
  it('should render hamburger button in variant closed', () => {
    render(<HamburgerButton isOpen={false} toggleHamburger={() => {}} />);
    const button = screen.getByText('Closed hamburger button');
    expect(button).toBeVisible();
  });
  it('should fire event click on the button once', () => {
    const handleClick = jest.fn();
    render(<HamburgerButton isOpen={false} toggleHamburger={handleClick} />);
    const button = screen.getByText('Closed hamburger button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
