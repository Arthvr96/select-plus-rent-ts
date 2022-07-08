import React from 'react';
import { Button } from './HamburgerButton.style';

interface IHamburgerButton {
  isOpen: boolean;
  toggleHamburger: () => void;
}

const HamburgerButton = ({ isOpen, toggleHamburger }: IHamburgerButton) => {
  return (
    <Button type="button" isOpen={isOpen} onClick={toggleHamburger}>
      {isOpen ? 'Opened hamburger button' : 'Closed hamburger button'}
      <div />
    </Button>
  );
};

export default HamburgerButton;
