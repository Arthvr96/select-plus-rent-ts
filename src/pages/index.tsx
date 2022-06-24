import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.title1};
    color: ${({ theme }) => theme.colors.text.black};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <h1>Hello world</h1>
    </Wrapper>
  );
};

export default Index;
