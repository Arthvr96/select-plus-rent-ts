import styled from 'styled-components';

export const ParallaxPlaceholder = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.parallaxPlaceholder};
  width: 100vw;
  height: ${({ height }: { height: string }) => height};
`;
