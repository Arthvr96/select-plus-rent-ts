import styled from 'styled-components';
import { IWindowsSize } from 'globalTypes';

interface IWrapper extends IWindowsSize {
  isVisible: boolean;
}

export const Wrapper = styled.nav<IWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.hamburgerMenu};
  width: 100vw;
  height: ${({ height }) => height}px;
  padding-top: 5.5rem;
  background-color: ${({ theme }) => theme.colors.bg.darkBlue};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in;

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  ${({ theme }) => theme.mq.laptop} {
    display: none;
  }
`;
