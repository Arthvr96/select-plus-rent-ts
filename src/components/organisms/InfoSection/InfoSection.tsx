import React from 'react';
import { InfoBg } from 'globalTypes';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import PerksList from 'components/molecules/PerksList/PerksList';
import {
  Wrapper,
  DisclaimersWrapper,
  StyledSectionTemplate,
  BackgroundImage,
} from './InfoSection.style';

const title = 'Najlepsza oferta w trojmiescie!';
const subtitle = 'Nie czekaj i zadzwon, lub zarezerwuj online swoje wymarzone auto jeszcze dzis !';

const disclaimer1 = '*1 - na terenie Gdańska';
const disclaimer2 = '*2 - max do 24h przed rezerwacja. Później opłata 200zł';

interface IInfoSection {
  imgBgSrc: InfoBg;
}

const InfoSection = ({ imgBgSrc: { img } }: IInfoSection) => {
  return (
    <StyledSectionTemplate>
      <BackgroundImage image={img.gatsbyImageData} alt="Samochod w garazu" />
      <Wrapper>
        <Title as="h2" size="title4" color="white">
          {title}
        </Title>
        <Subtitle as="h3" size="subtitle4" color="white" margin="1.5rem 0 0 0">
          {subtitle}
        </Subtitle>
        <PerksList />
        <DisclaimersWrapper>
          <p>{disclaimer1}</p>
          <p>{disclaimer2}</p>
        </DisclaimersWrapper>
      </Wrapper>
    </StyledSectionTemplate>
  );
};

export default InfoSection;
