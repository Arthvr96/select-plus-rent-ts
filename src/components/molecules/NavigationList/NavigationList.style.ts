import styled from 'styled-components';
import { desktopNavVariantType } from 'globalTypes';

interface INavigation {
  isSelected?: boolean;
}

interface INavLink {
  desktopNavVariant: desktopNavVariantType;
}

export const Navigation = styled.ul<INavigation>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;

  li {
    margin-bottom: 3.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 40rem;
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    margin: 0;

    li {
      margin: 0;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      background-color: transparent;
    }

    li:first-child {
      display: none;
    }
  }

  ${({ theme }) => theme.mq.laptop} {
    width: 60rem;
    flex-direction: row;
    justify-content: space-between;
    justify-self: flex-end;
    margin: 0 5rem;

    li {
      margin: 0;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      background-color: transparent;
    }
  }
`;

export const NavLink = styled.a<INavLink>`
  padding: 2rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.button1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: font-size 0.2s ease-in, color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.bg.blue};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 2rem 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.button2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-transform: none;
    letter-spacing: 0;
  }

  ${({ theme }) => theme.mq.laptop} {
    padding: 2rem 0.5rem;
    font-size: ${({ theme, desktopNavVariant }) =>
      desktopNavVariant === 'big' ? theme.fontSize.button1 : theme.fontSize.button2};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-transform: none;
    letter-spacing: 0;
  }
`;
