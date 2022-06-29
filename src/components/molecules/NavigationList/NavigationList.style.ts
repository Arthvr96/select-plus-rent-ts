import styled from 'styled-components';

export const Navigation = styled.ul`
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
`;

export const NavLink = styled.a`
  padding: 2rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.button1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;
