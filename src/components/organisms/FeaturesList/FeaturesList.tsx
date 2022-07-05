import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { featuresData } from './FeaturesListMockedData';
import { List, ListItem, StyledSectionTemplate } from './FeaturesList.style';

const FeaturesList = () => {
  return (
    <StyledSectionTemplate>
      <Title variant="sectionTitleBlack">Dlaczego warto nas wybrać?</Title>
      <Subtitle variant="sectionSubtitleBlack" margin="2rem 0 4rem 0">
        Postaw na sprawdzoną firmę z inwidualnym podejsciem do klienta
      </Subtitle>
      <List>
        {featuresData.map(({ id, title, icon: Icon, description }) => (
          <ListItem key={id}>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </ListItem>
        ))}
      </List>
    </StyledSectionTemplate>
  );
};

export default FeaturesList;
