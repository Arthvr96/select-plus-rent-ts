import styled from 'styled-components';
import { IContactBox } from './ContactBox';

export const Wrapper = styled.div<IContactBox>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5000;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s 0.3s ease-in-out;
`;

export const ContactLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.white};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    padding-left: 0.5rem;
  }
`;
