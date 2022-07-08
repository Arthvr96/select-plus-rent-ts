import React from 'react';
import { render, screen } from 'test-utils';
import HamburgerButton from './HamburgerButton';
import { fireEvent } from '@testing-library/react';

describe('Testing HamburgerButton', () => {
  it('Correctly render opened hamburger button', () => {
    render(<HamburgerButton isOpen={true} toggleHamburger={() => {}} />);
    const button = screen.getByText('Opened hamburger button');
    expect(button).toBeVisible();
  });
  it('Correctly render closed hamburger button', () => {
    render(<HamburgerButton isOpen={false} toggleHamburger={() => {}} />);
    const button = screen.getByText('Closed hamburger button');
    expect(button).toBeVisible();
  });
  it('Check if toggleHamburger function is fire on click', () => {
    const handleClick = jest.fn();
    render(<HamburgerButton isOpen={false} toggleHamburger={handleClick} />);
    const button = screen.getByText('Closed hamburger button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
