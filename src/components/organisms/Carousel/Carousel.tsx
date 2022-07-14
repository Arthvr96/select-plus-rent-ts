import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ICarouselProps } from 'globalTypes';
import CarouselSlide from 'components/molecules/CarouselSlide/CarouselSlide';
import { CarouselWrapper, Slider, ButtonSlider } from './Carousel.style';

const Carousel = ({ slidersData, settings }: ICarouselProps) => {
  const [sliderPos, setSliderPos] = useState(0);
  const [isWorking, setIsWorking] = useState(false);
  const { animationDuration, animationDelay, easingAnimation } = settings;
  const sliderRef = useRef<HTMLDivElement>(null);
  let infiniteLoopRef: number;
  const maxSliderPos = (slidersData.slides.length - 1) * -100;

  const changeSlide = useCallback(
    (direction: 'left' | 'right') => {
      if (!isWorking) {
        setIsWorking(true);
        window.clearInterval(infiniteLoopRef);
        window.setTimeout(() => setIsWorking(false), animationDuration);
        if (direction === 'right') {
          setSliderPos((prevState) => (prevState === maxSliderPos ? 0 : prevState - 100));
        }
        if (direction === 'left') {
          setSliderPos((prevState) => (prevState === 0 ? maxSliderPos : prevState + 100));
        }
      }
    },
    [isWorking, setSliderPos, animationDuration]
  );

  useEffect(() => {
    //init
    if (sliderRef.current) {
      sliderRef.current.style.transitionDuration = `${animationDuration}ms`;
      sliderRef.current.style.transitionTimingFunction = easingAnimation;
    }
  }, [animationDuration, easingAnimation]);

  useEffect(() => {
    if (!isWorking) {
      infiniteLoopRef = window.setInterval(
        () => setSliderPos((prevState) => (prevState === maxSliderPos ? 0 : prevState - 100)),
        animationDelay
      );
    }

    return () => {
      window.clearInterval(infiniteLoopRef);
    };
  }, [isWorking, animationDelay]);

  useEffect(() => {
    // update slider pos
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${sliderPos}vw)`;
    }
  }, [sliderPos]);

  return (
    <CarouselWrapper>
      <ButtonSlider
        type="button"
        tabIndex={0}
        onClick={() => changeSlide('left')}
        direction={'left'}
      >
        Previous slide
      </ButtonSlider>
      <ButtonSlider
        type="button"
        tabIndex={0}
        onClick={() => changeSlide('right')}
        direction={'right'}
      >
        Next slide
      </ButtonSlider>
      <Slider data-testid="slider" ref={sliderRef}>
        {slidersData.slides.map(({ id, title, subtitle, slideImage }) => (
          <CarouselSlide
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            slideImage={slideImage}
          />
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
