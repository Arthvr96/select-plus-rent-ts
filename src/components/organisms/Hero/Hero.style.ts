import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.fixedHero};
  width: 100vw;
  height: 70vh;
`;
