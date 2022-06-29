import styled, { css } from 'styled-components';

const HamburgerElMixin = css`
  position: absolute;
  left: 0;
  content: '';
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.bg.white};
  transition: transform 0.15s ease-in;
`;

type HamburgerButton = {
  isOpen: boolean;
};

export const Button = styled.button<HamburgerButton>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  background-color: transparent;
  border: none;

  div {
    position: relative;
    width: 3rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.bg.white};
  }

  div:before {
    ${HamburgerElMixin};
    top: -9px;
    transform: translateY(${({ isOpen }) => (isOpen ? '9px' : '0')});
  }

  div:after {
    ${HamburgerElMixin};
    bottom: -9px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-9px' : '0')});
  }
`;
