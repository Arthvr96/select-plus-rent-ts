import React from 'react';
import { render, screen } from 'test-utils';
import { carsDataMock } from 'mocks/graphqlMocks';
import CarItem from './CarItem';

const [car] = carsDataMock.cars;

describe('CarItem', () => {
  it('should', () => {
    render(<CarItem carData={car} />);
    const img = screen.getByAltText(car.gallery[0].alt);
    const title = screen.getByText(car.carName);
    const subtitle = screen.getByText(car.shortDescription);
    const infoWrapper = screen.getByText(car.info[0]).parentElement;
    const pricesWrapper = screen.getByText(car.prices[0]).parentElement?.parentElement
      ?.parentElement;

    expect(img).toBeVisible();
    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    infoWrapper && expect(infoWrapper.children).toHaveLength(car.info.length);
    pricesWrapper && expect(pricesWrapper.children).toHaveLength(car.prices.length);

    car.info.forEach((info) => {
      const ref = screen.getByText(info);
      expect(ref).toBeVisible();
    });

    car.prices.forEach((price) => {
      const ref = screen.getByText(price);
      expect(ref).toBeVisible();
    });
  });
});
