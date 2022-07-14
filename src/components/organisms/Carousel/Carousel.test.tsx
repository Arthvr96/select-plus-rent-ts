import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { ButtonSlider } from './Carousel.style';
import Carousel from './Carousel';
import { heroSlidesMock } from 'mocks/graphqlMocks';
import { waitFor } from '@testing-library/react';
import { setWindowSize } from 'helpers/testing';

describe('Carousel', () => {
  it('should render ButtonSlider with direction right', () => {
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
    expect(slider.children).toHaveLength(heroSlidesMock.slides.length);
  });

  it('should render correctly settings passed in props', () => {
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

    expect(slider).toHaveStyle({
      'transition-duration': '700ms',
      'transition-timing-function': 'ease-in-out',
    });
  });

  it('should change slide to next by clicking on the arrow', async () => {
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
  });

  it('should change slide to previous by clicking on the arrow', async () => {
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
    const buttonPrevious = screen.getByText('Previous slide');

    expect(slider).toHaveStyle({
      transform: 'translateX(0vw)',
    });

    fireEvent.click(buttonPrevious);
    await waitFor(
      () => {
        expect(slider).toHaveStyle({
          transform: 'translateX(-200vw)',
        });
      },
      { timeout: 150 }
    );
  });

  it('should change slide to next automatic after 400ms', async () => {
    render(
      <Carousel
        slidersData={heroSlidesMock}
        settings={{
          animationDuration: 100,
          animationDelay: 300,
          easingAnimation: 'ease-in-out',
        }}
      />
    );
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveStyle({
      transform: 'translateX(0vw)',
    });

    await waitFor(
      () => {
        expect(slider).toHaveStyle({
          transform: 'translateX(-100vw)',
        });
      },
      { timeout: 400 }
    );
  });
});
