import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { ButtonSlider } from './Carousel.style';
import Carousel from './Carousel';
import { heroSlidesMock } from 'mocks/graphqlMocks';
import { waitFor } from '@testing-library/react';

describe('Carousel', () => {
  it('should render slider button with direction right', () => {
    const onclick = jest.fn();
    render(
      <>
        <ButtonSlider type="button" onClick={onclick} direction="right">
          Next
        </ButtonSlider>
      </>
    );

    const button = screen.getByText('Next');
    expect(button).toHaveStyle({
      left: 'unset',
      right: '10px',
      transform: 'translateY(-50%) rotate(180deg)',
    });
  });
  it('should render slider button with direction left', () => {
    const onclick = jest.fn();
    render(
      <>
        <ButtonSlider type="button" onClick={onclick} direction="left">
          Previous
        </ButtonSlider>
      </>
    );

    const button = screen.getByText('Previous');
    expect(button).toHaveStyle({
      left: '10px',
      right: 'unset',
      transform: 'translateY(-50%) rotate(0)',
    });
  });
  it('should called onclick fn once on click', () => {
    const onclick = jest.fn();
    render(
      <>
        <ButtonSlider type="button" onClick={onclick} direction="left">
          Previous
        </ButtonSlider>
      </>
    );

    const button = screen.getByText('Previous');
    fireEvent.click(button);
    expect(onclick).toHaveBeenCalledTimes(1);
  });

  it('should render correctly number of slides', () => {
    render(
      <Carousel
        slidersData={heroSlidesMock}
        settings={{
          animationDuration: 700,
          animationDelay: 3500,
          easingAnimation: 'ease-in-out',
        }}
      />
    );
    const slider = screen.getByTestId('slider');
    expect(slider.children).toHaveLength(heroSlidesMock.slides.length + 1);
  });

  it('should change slide to next and after to previous', async () => {
    render(
      <Carousel
        slidersData={heroSlidesMock}
        settings={{
          animationDuration: 100,
          animationDelay: 3500,
          easingAnimation: 'ease-in-out',
        }}
      />
    );
    const slider = screen.getByTestId('slider');
    const buttonNext = screen.getByText('Next slide');
    const buttonPrevious = screen.getByText('Previous slide');

    expect(slider).toHaveStyle({
      transform: 'translateX(0vw)',
    });

    fireEvent.click(buttonNext);
    await waitFor(
      () => {
        expect(slider).toHaveStyle({
          transform: 'translateX(-100vw)',
        });
      },
      { timeout: 150 }
    );

    fireEvent.click(buttonPrevious);
    await waitFor(
      () => {
        expect(slider).toHaveStyle({
          transform: 'translateX(0vw)',
        });
      },
      { timeout: 150 }
    );
  });
});
