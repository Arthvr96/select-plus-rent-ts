import React from 'react';
import { useIndexContext } from 'providers/IndexContextProvider';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import HamburgerMenu from 'components/organisms/HamburgerMenu/HamburgerMenu';
import { NavBarWrapper } from './NavBar.style';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import Socials from 'components/molecules/Socials/Socials';

const NavBar = () => {
  const { isHamburgerOpen, handleToggleHamburger, isNavHidden, desktopNavVariant, isMobile } =
    useIndexContext();

  return (
    <>
      <NavBarWrapper
        isHidden={isNavHidden}
        showShadow={!isHamburgerOpen}
        desktopNavVariant={desktopNavVariant}
      >
        <Logo type="withLinkPrimary" desktopNavVariant={desktopNavVariant} />
        {!isMobile ? (
          <>
            <NavigationList desktopNavVariant={desktopNavVariant} />
            <Socials margin="0" />
          </>
        ) : null}
        <HamburgerButton isOpen={isHamburgerOpen} toggleHamburger={handleToggleHamburger} />
      </NavBarWrapper>
      <HamburgerMenu isVisible={isHamburgerOpen} />
    </>
  );
};

export default NavBar;
