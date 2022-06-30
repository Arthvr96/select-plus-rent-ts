import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70%;

  li {
    display: grid;
    width: 270px;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  li svg {
    justify-self: center;
    align-self: center;
  }

  li p {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.white};
  }

  li p:last-child {
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;
