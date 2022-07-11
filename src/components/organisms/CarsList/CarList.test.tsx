import React from 'react';
import { render, screen } from 'test-utils';
import { carListDataMock } from 'mocks/CarListDataMock';
import CarsList from 'components/organisms/CarsList/CarsList';

beforeEach(() => {
  render(<CarsList carsData={carListDataMock} />);
});

describe('Testing CarList component', () => {
  it('Check if headers render correctly', () => {
    const title = screen.getByText(/Flota/);
    const subtitle = screen.getByText(/Zrealizuj/);

    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
  });
  it('Check if number of rendered cars is correct', () => {
    const wrapper = screen.getByText(/Flota/).parentElement?.parentElement;
    if (wrapper) {
      expect(wrapper.children).toHaveLength(3);
    }
  });
  it('Check if carItem is render correctly', () => {
    const car1 = carListDataMock.cars[0];
    const carName = screen.getByText(car1.carName);
    const description = screen.getByText(car1.shortDescription);
    const infoWrapper = screen.getByText(car1.info[0]).parentElement;
    const pricesWrapper = screen.getByText(car1.prices[0]).parentElement?.parentElement
      ?.parentElement;

    expect(carName).toBeVisible();
    expect(description).toBeVisible();
    if (infoWrapper) {
      expect(infoWrapper.children).toHaveLength(4);
    }
    if (pricesWrapper) {
      expect(pricesWrapper.children).toHaveLength(3);
    }
  });
});
