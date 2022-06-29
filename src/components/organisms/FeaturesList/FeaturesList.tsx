import React from 'react';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { featuresData } from './FeaturesListMockedData';
import { List, ListItem } from './FeaturesList.style';

const FeaturesList = () => {
  return (
    <SectionTemplate>
      <List>
        {featuresData.map(({ id, title, icon: Icon }) => (
          <ListItem key={id}>
            <Icon />
            <h3>{title}</h3>
          </ListItem>
        ))}
      </List>
    </SectionTemplate>
  );
};

export default FeaturesList;
