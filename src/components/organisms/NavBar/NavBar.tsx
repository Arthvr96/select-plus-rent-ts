import React from 'react';
import { useIndexContext } from 'providers/IndexContextProvider';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import HamburgerMenu from 'components/organisms/HamburgerMenu/HamburgerMenu';
import { NavBarWrapper } from './NavBar.style';
import NavigationList from 'components/molecules/NavigationList/NavigationList';
import { useWindowSize } from 'hooks/useWindowSize';
import Socials from 'components/molecules/Socials/Socials';

const NavBar = () => {
  const { width } = useWindowSize();
  const { isHamburgerOpen, handleToggleHamburger, isNavHidden, desktopNavVariant } =
    useIndexContext();

  return (
    <>
      <NavBarWrapper
        isHidden={isNavHidden}
        showShadow={!isHamburgerOpen}
        desktopNavVariant={desktopNavVariant}
      >
        <Logo type="withLinkPrimary" desktopNavVariant={desktopNavVariant} />
        {width && width > 1279 ? (
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
