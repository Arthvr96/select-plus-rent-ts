import React from 'react';
import { Button } from './HamburgerButton.style';

interface IHamburgerButton {
  isOpen: boolean;
  toggleHamburger: () => void;
}

const HamburgerButton = ({ isOpen, toggleHamburger }: IHamburgerButton) => {
  return (
    <Button isOpen={isOpen} onClick={toggleHamburger}>
      <div />
    </Button>
  );
};

export default HamburgerButton;
