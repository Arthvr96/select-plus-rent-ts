import React from 'react';
import LogoSvg from 'assets/svg/logo.react.svg';
import { LogoWrapper } from './Logo.style';
import { useIndexContext } from 'providers/IndexContextProvider';
import { desktopNavVariantType } from 'globalTypes';

const Types = {
  withLinkPrimary: 'withLinkPrimary',
  withLinkSecondary: 'withLinkSecondary',
} as const;

interface ILogo {
  type?: typeof Types[keyof typeof Types];
  desktopNavVariant?: desktopNavVariantType;
}

const Logo = ({ type, desktopNavVariant }: ILogo) => {
  const { isHamburgerOpen, handleToggleHamburger } = useIndexContext();

  const handleClick = () => {
    if (isHamburgerOpen) {
      handleToggleHamburger();
    }
  };

  if (type === Types.withLinkPrimary || type === Types.withLinkSecondary)
    return (
      <LogoWrapper
        onClick={handleClick}
        to="/"
        $isPrimary={type === Types.withLinkPrimary}
        $desktopNavVariant={desktopNavVariant}
      >
        {type === Types.withLinkPrimary ? <h1>Select Plus Rent</h1> : <h3>Select Plus Rent</h3>}
        <LogoSvg />
      </LogoWrapper>
    );
  return <LogoSvg />;
};

export default Logo;
