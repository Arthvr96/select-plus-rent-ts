import React from 'react';
import LogoSvg from 'assets/svg/logo.react.svg';
import { LogoWrapper } from './Logo.style';

const Types = {
  withLinkPrimary: 'withLinkPrimary',
  withLinkSecondary: 'withLinkSecondary',
  withNoLink: 'withNoLink',
} as const;

interface ILogo {
  type: typeof Types[keyof typeof Types];
}

const Logo = ({ type }: ILogo) => {
  if (type === Types.withLinkPrimary || type === Types.withLinkSecondary)
    return (
      <LogoWrapper to="/">
        {type === Types.withLinkPrimary ? <h1>Select Plus Rent</h1> : <h3>Select Plus Rent</h3>}
        <LogoSvg />
      </LogoWrapper>
    );
  if (type === Types.withNoLink) return <LogoSvg />;
  return <></>;
};

export default Logo;
