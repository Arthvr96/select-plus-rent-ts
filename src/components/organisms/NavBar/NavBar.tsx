import React from 'react';
import { useIndexContext } from 'providers/IndexContextProvider';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import HamburgerMenu from 'components/organisms/HamburgerMenu/HamburgerMenu';
import { NavBarWrapper } from './NavBar.style';

const NavBar = () => {
  const { isHamburgerOpen, handleToggleHamburger, isNavHidden } = useIndexContext();

  return (
    <>
      <NavBarWrapper isHidden={isNavHidden} showShadow={!isHamburgerOpen}>
        <Logo type="withLinkPrimary" />
        <HamburgerButton isOpen={isHamburgerOpen} toggleHamburger={handleToggleHamburger} />
      </NavBarWrapper>
      <HamburgerMenu isVisible={isHamburgerOpen} />
    </>
  );
};

export default NavBar;
