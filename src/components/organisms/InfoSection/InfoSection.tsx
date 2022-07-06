import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import PerksList from 'components/molecules/PerksList/PerksList';
import { Wrapper, DisclaimersWrapper, StyledSectionTemplate } from './InfoSection.style';
import { useWindowSize } from 'hooks/useWindowSize';

const title = 'Najlepsza oferta w trojmiescie!';
const subtitle = 'Nie czekaj i zadzwon, lub zarezerwuj online swoje wymarzone auto jeszcze dzis !';

const disclaimer1 = '*1 - na terenie Gdańska';
const disclaimer2 = '*2 - max do 24h przed rezerwacja. Później opłata 200zł';

interface IInfoSection {
  srcBg: string;
}

const InfoSection = ({ srcBg }: IInfoSection) => {
  const { height } = useWindowSize();

  return (
    <StyledSectionTemplate srcBg={srcBg}>
      <Wrapper height={height}>
        <hgroup>
          <Title variant="sectionTitleWhite">{title}</Title>
          <Subtitle variant="sectionSubtitleWhite" margin="1.5rem 0 0 0">
            {subtitle}
          </Subtitle>
        </hgroup>
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
