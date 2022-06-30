import React from 'react';
import { List, PriceBox } from './PricesList.style';

const pricesNames = ['Doba', 'Weekend', 'Tydzień', 'Miesiąc'];

interface IPricesList {
  prices: string[];
}

const PricesList = ({ prices }: IPricesList) => {
  return (
    <List>
      {prices.map((priceItem, i) => (
        <li key={priceItem}>
          <PriceBox type="button">
            <p>{pricesNames[i]}</p>
            <p>{priceItem}</p>
          </PriceBox>
        </li>
      ))}
    </List>
  );
};

export default PricesList;
