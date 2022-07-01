import React from 'react';
import AboutUs from 'components/molecules/AboutUs/AboutUs';
import Contact from 'components/molecules/Contact/Contact';
import Copyright from 'components/molecules/Copyright/Copyright';
import { StyledSectionTemplate, Wrapper, SectionWrapper } from './Footer.style';
import { useWindowSize } from 'hooks/useWindowSize';

const Footer = () => {
  const { height } = useWindowSize();

  return (
    <StyledSectionTemplate>
      <Wrapper height={height}>
        <SectionWrapper>
          <AboutUs />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
        <Copyright />
      </Wrapper>
    </StyledSectionTemplate>
  );
};

export default Footer;
