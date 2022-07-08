import React from 'react';
import { render, screen, act } from 'test-utils';
import { Wrapper } from './Hero.style';
import Carousel from 'components/organisms/Carousel/Carousel';
import { heroDataMock } from 'mocks/heroDataMock';
import { settingsType } from 'globalTypes';
import { fireEvent, waitFor } from '@testing-library/react';

const settings: settingsType = {
  animationDuration: 700,
  animationDelay: 10000,
  easingAnimation: 'ease-in-out',
};

beforeEach(() => {
  render(
    <Wrapper>
      <Carousel slidersData={heroDataMock} settings={settings} />
    </Wrapper>
  );
});

describe('Testing Hero Carousel', () => {
  it('Check correct number of slides. (number of slides received from cms + 1)', () => {
    const slide2Title = screen.getAllByText(/slide\d-title/);
    expect(slide2Title).toHaveLength(heroDataMock.slides.length + 1);
  });
  it('Check if elements of everyone slide are visible', () => {
    const slideElements = screen.getAllByText(/slide/);
    slideElements.forEach((el) => {
      expect(el).toBeVisible();
    });
  });
  it('Check if button next slide works correctly', async () => {
    const slider = screen.getByTestId('slider');
    const button = screen.getByText('Next slide');
    expect(button).toBeVisible();
    expect(slider).toBeVisible();
    expect(slider).toHaveStyle({
      transform: 'translateX(0vw)',
    });
    fireEvent.click(button);
    await waitFor(() => {
      expect(slider).toHaveStyle({
        transform: 'translateX(-100vw)',
      });
    });
  });
  it('Check if button previous slide works correctly', async () => {
    const slider = screen.getByTestId('slider');
    const button = screen.getByText('Previous slide');
    expect(button).toBeVisible();
    expect(slider).toBeVisible();
    expect(slider).toHaveStyle({
      transform: 'translateX(0vw)',
    });
    fireEvent.click(button);
    await waitFor(() => {
      expect(slider).toHaveStyle({
        transform: `translateX(-${heroDataMock.slides.length * 100 - 100}vw)`,
      });
    });
  });
});
