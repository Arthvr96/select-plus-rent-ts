import React from 'react';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import Socials from 'components/molecules/Socials/Socials';
import ContactBox from 'components/molecules/ContactBox/ContactBox';
import { Wrapper } from './HamburgerMenu.style';
import { useWindowSize } from 'hooks/useWindowSize';

interface IHamburgerMenu {
  isVisible: boolean;
}

const HamburgerMenu = ({ isVisible }: IHamburgerMenu) => {
  const { height } = useWindowSize();

  return (
    <Wrapper isVisible={isVisible} height={height}>
      <NavigationList />
      <Socials />
      <ContactBox isVisible={isVisible} />
    </Wrapper>
  );
};

export default HamburgerMenu;
