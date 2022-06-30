import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  width: 100%;
`;

export const PriceBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  padding: 0.4rem 0;
  background-color: ${({ theme }) => theme.colors.bg.blue};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.colors.text.white};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
