import styled from 'styled-components';
import { desktopNavVariantType } from 'globalTypes';

interface INavBarWrapperTypes {
  showShadow: boolean;
  isHidden: boolean;
  desktopNavVariant: desktopNavVariantType;
}

export const NavBarWrapper = styled.nav<INavBarWrapperTypes>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.navBar};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5.5rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.bg.darkBlue};
  transform: translateY(${({ isHidden }) => (isHidden ? '-100%' : '0')});
  box-shadow: ${({ showShadow }) => (showShadow ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
  transition: transform 0.2s ease-in, height 0.2s ease-in, padding 0.2s ease-in;

  ${({ theme }) => theme.mq.laptop} {
    display: grid;
    grid-template-columns: ${({ desktopNavVariant }) =>
      desktopNavVariant === 'big' ? '330px 1fr 75px;' : '150px 1fr 75px;'};
    grid-template-rows: 1fr;
    height: ${({ desktopNavVariant }) => (desktopNavVariant === 'big' ? '17rem' : '7.5rem')};
    padding: ${({ desktopNavVariant }) => (desktopNavVariant === 'big' ? '0 10rem' : '0 5rem')};
    background-color: ${({ theme, desktopNavVariant }) =>
      desktopNavVariant === 'big' ? 'transparent' : theme.colors.bg.darkBlue};
    box-shadow: ${({ desktopNavVariant, showShadow }) =>
      desktopNavVariant === 'small' && showShadow ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
  } ;
`;
