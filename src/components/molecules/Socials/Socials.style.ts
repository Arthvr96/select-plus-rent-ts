import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  a {
    cursor: pointer;
    padding: 1rem 2rem;
    text-indent: -999rem;
  }

  a:first-child {
    margin-right: 2rem;
  }
`;
