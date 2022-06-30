import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledSectionTemplate = styled(SectionTemplate)`
  padding: 0 1.5rem;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 5rem;
`;

export const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};

  &:before {
    content: '';
    position: absolute;
    z-index: 70;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(0deg, rgba(12, 33, 42, 0.3) 0%, rgba(12, 33, 42, 1) 80%);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 70;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(180deg, rgba(12, 33, 42, 0.3) 0%, rgba(12, 33, 42, 1) 80%);
  }
`;

export const DisclaimersWrapper = styled.div`
  position: absolute;
  z-index: 105;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
