import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import Logo from 'components/molecules/Logo/Logo';
import Socials from 'components/molecules/Socials/Socials';
import { Paragraph } from './AboutUs.style';

const paragraph1_1 = <span>Select+ Rent</span>;
const paragraph1_2 = ' - Wypożyczalnia samochodów sportowych na terenie Trójmiasta.';
const paragraph2 =
  'Pozwól już dziś spełnić nam Twoje marzenia i wynajmij auto w Gdańsku, Gdyni lub Sopocie.';

const AboutUs = () => {
  return (
    <>
      <Title variant="sectionTitleWhite" margin="0">
        O nas
      </Title>
      <Logo type="withNoLink" />
      <Paragraph margin="0">
        {paragraph1_1}
        {paragraph1_2}
      </Paragraph>
      <Paragraph>{paragraph2}</Paragraph>
      <Socials margin="0" />
    </>
  );
};

export default AboutUs;
