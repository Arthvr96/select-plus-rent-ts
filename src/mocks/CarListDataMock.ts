import { CarsData } from 'globalTypes';

export const carListDataMock: CarsData = {
  cars: [
    {
      id: '0',
      carName: 'Lamborghini Gallardo',
      shortDescription: 'Najbardziej pożądany sportowy samochód na świecie',
      info: ['550KM', '4x4', 'Automatyczna', 'Benzyna'],
      prices: ['2299zl', '5499zl', '9499zl'],
    },
    {
      id: '1',
      carName: 'Ford Focus RS',
      shortDescription: 'Najczesciej tuningowany samochod na świecie',
      info: ['310KM', 'Przod', 'Automatyczna', 'Benzyna'],
      prices: ['499zl', '1299zl', '2999zl'],
    },
  ],
};
