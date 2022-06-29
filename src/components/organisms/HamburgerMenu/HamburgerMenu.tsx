import React from 'react';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import Socials from 'components/molecules/Socials/Socials';
import ContactBox from 'components/molecules/ContactBox/ContactBox';
import { Wrapper } from './HamburgerMenu.style';

interface IHamburgerMenu {
  isVisible: boolean;
  closeHamburger: () => void;
}

const HamburgerMenu = ({ isVisible, closeHamburger }: IHamburgerMenu) => {
  return (
    <Wrapper isVisible={isVisible}>
      <NavigationList closeHamburger={closeHamburger} />
      <Socials />
      <ContactBox isVisible={isVisible} />
    </Wrapper>
  );
};

export default HamburgerMenu;
