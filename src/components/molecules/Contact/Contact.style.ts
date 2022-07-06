import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70%;

  ${({ theme }) => theme.mq.laptop} {
    justify-content: center;
    height: fit-content;
  }

  li {
    display: grid;
    width: 270px;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1.5rem;

    ${({ theme }) => theme.mq.laptop} {
      grid-template-columns: 1fr 50px;
      margin-bottom: 2rem;
    }
  }

  li svg {
    justify-self: center;
    align-self: center;

    ${({ theme }) => theme.mq.laptop} {
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  li:last-child {
    margin-bottom: 0;

    ${({ theme }) => theme.mq.laptop} {
      grid-area: 1 / 1 / 2 / 2;
      margin-bottom: 0;
    }
  }

  li p {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.white};

    ${({ theme }) => theme.mq.laptop} {
      text-align: right;
    }
  }

  li p:last-child {
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;
