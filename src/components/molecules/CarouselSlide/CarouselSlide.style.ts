import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Slide = styled.div`
  position: relative;

  h2 {
    width: 80%;
  }

  h3 {
    width: 85%;
  }
`;

export const StyledImg = styled(GatsbyImage)`
  position: relative;
  z-index: -1;
  width: 100vw;
  height: 100%;
`;

export const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
