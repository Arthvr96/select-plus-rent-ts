import React from 'react';
import { List, PerkItem } from './PerksList.style';

const perks = [
  { id: '0', title: '0 zł', subtitle: 'kaucji' },
  { id: '1', title: '0 zł', subtitle: 'za dostawe auta', disclaimer: 1 },
  {
    id: '2',
    title: '0 zł',
    subtitle: 'odwołanie rezerwacji',
    disclaimer: 2,
  },
  { id: '3', title: '18', subtitle: 'minimalny wiek' },
];

const PerksList = () => {
  return (
    <List>
      {perks.map(({ id, title, subtitle, disclaimer }) => (
        <PerkItem key={id}>
          <p>
            {title}
            {disclaimer ? <span>*{disclaimer}</span> : null}
          </p>
          <p>{subtitle}</p>
        </PerkItem>
      ))}
    </List>
  );
};

export default PerksList;
