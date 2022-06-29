import styled from 'styled-components';

interface INavBarWrapperTypes {
  showShadow: boolean;
}

export const NavBarWrapper = styled.nav<INavBarWrapperTypes>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5.5rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.bg.darkBlue};
  box-shadow: ${({ showShadow }) => (showShadow ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
  transition: box-shadow 0.3s ease-in;
`;
