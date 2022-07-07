import styled from 'styled-components';

interface IParallaxPlaceholder {
  height: string;
}

export const ParallaxPlaceholder = styled.div<IParallaxPlaceholder>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.parallaxPlaceholder};
  width: 100vw;
  height: ${({ height }) => height};
`;
