import React from 'react';
import AboutUs from 'components/molecules/AboutUs/AboutUs';
import Contact from 'components/molecules/Contact/Contact';
import Copyright from 'components/molecules/Copyright/Copyright';
import { StyledSectionTemplate, Wrapper, SectionWrapper } from './Footer.style';

interface IFooter {
  id: string;
}

const Footer = ({ id }: IFooter) => {
  return (
    <StyledSectionTemplate id={id}>
      <Wrapper>
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
