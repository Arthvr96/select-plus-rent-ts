import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  a {
    cursor: pointer;
    padding: 1rem 2rem;
  }

  a:first-child {
    margin-right: 2rem;
  }
`;
