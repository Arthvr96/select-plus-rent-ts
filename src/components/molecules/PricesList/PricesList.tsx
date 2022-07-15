import React from 'react';
import { List, PriceBox } from './PricesList.style';

const pricesNames = ['Doba', 'Weekend', 'Tydzień', 'Miesiąc'];

interface IPricesList {
  prices: string[];
  idCar: string;
}

const PricesList = ({ prices, idCar }: IPricesList) => {
  return (
    <List>
      {prices.map((priceItem, i) => (
        <li key={priceItem}>
          <PriceBox to={`/reservation`} state={{ idCar: idCar, selectedPrice: priceItem }}>
            <p>{pricesNames[i]}</p>
            <p>{priceItem}</p>
          </PriceBox>
        </li>
      ))}
    </List>
  );
};

export default PricesList;
