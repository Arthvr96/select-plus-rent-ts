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
        <SectionWrapper alignItems="flex-start" padding="0 0 0 13rem" gridArea="1 / 1 / 2 / 2">
          <AboutUs />
        </SectionWrapper>
        <SectionWrapper alignItems="flex-end" padding="0 13rem 0 0" gridArea="1 / 2 / 2 / 3">
          <Contact />
        </SectionWrapper>
        <Copyright />
      </Wrapper>
    </StyledSectionTemplate>
  );
};

export default Footer;
