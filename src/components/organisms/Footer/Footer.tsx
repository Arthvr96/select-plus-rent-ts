import React from 'react';
import AboutUs from 'components/molecules/AboutUs/AboutUs';
import Contact from 'components/molecules/Contact/Contact';
import Copyright from 'components/molecules/Copyright/Copyright';
import { StyledSectionTemplate, Wrapper, SectionWrapper } from './Footer.style';
import { useWindowSize } from 'hooks/useWindowSize';
import { useIndexContext } from 'providers/IndexContextProvider';

const Footer = () => {
  const { isNavHidden } = useIndexContext();
  const { height } = useWindowSize();

  return (
    <StyledSectionTemplate>
      <Wrapper isNavHidden={isNavHidden} height={height}>
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
