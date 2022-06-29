import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 1rem;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.decors.lightGrey};
  border-radius: 5px;

  h3 {
    width: calc(100% - 4rem);
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.title5};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.black};
  }
`;
