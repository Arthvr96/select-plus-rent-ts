import React from 'react';
import { featuresData } from './FeaturesListMockedData';
import { List, ListItem, StyledSectionTemplate } from './FeaturesList.style';

const FeaturesList = () => {
  return (
    <StyledSectionTemplate>
      <List>
        {featuresData.map(({ id, title, icon: Icon }) => (
          <ListItem key={id}>
            <Icon />
            <h3>{title}</h3>
          </ListItem>
        ))}
      </List>
    </StyledSectionTemplate>
  );
};

export default FeaturesList;
