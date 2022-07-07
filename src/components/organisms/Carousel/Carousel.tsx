import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { ICarouselProps } from 'globalTypes';
import CarouselSlide from 'components/molecules/CarouselSlide/CarouselSlide';
import { CarouselWrapper, Slider, ButtonSlider } from './Carousel.style';

const Carousel = ({ slidersData, settings }: ICarouselProps) => {
  const { animationDuration, animationDelay, easingAnimation } = settings;
  const firstSlide = slidersData.slides[0];
  const [moveBy, setMoveBy] = useState(0);
  const [delayInfinityLoop, setDelayInfinityLoop] = useState(animationDelay);

  const sliderRef = useRef<HTMLDivElement>(null);
  let interval: number;

  const changeSlide = debounce((direction: 'left' | 'right') => {
    if (sliderRef.current) {
      window.clearInterval(interval);
      const sliderEl = sliderRef.current;
      const maxMoveBy = (sliderEl.children.length - 1) * 100;

      const timeOut = (value: number) => {
        sliderEl.style.transitionDuration = `${animationDuration}ms`;
        setMoveBy(value);
      };

      if (direction === 'left') {
        if (moveBy !== 0) {
          if (delayInfinityLoop === animationDuration) {
            setDelayInfinityLoop(animationDelay);
          }
          if (sliderEl.style.transitionDuration === '0ms') {
            sliderEl.style.transitionDuration = `${animationDuration}ms`;
          }
          setMoveBy(moveBy - 100);
        } else {
          sliderEl.style.transitionDuration = `0ms`;
          setMoveBy(maxMoveBy);
          window.setTimeout(() => timeOut(maxMoveBy - 100), 0);
        }
      } else if (direction === 'right') {
        if (moveBy !== maxMoveBy) {
          if (delayInfinityLoop === animationDuration) {
            setDelayInfinityLoop(animationDelay);
          }
          if (sliderEl.style.transitionDuration === '0ms') {
            sliderEl.style.transitionDuration = `${animationDuration}ms`;
          }
          setMoveBy(moveBy + 100);
        } else {
          sliderEl.style.transitionDuration = `0ms`;
          setMoveBy(0);
          window.setTimeout(() => timeOut(100), 0);
        }
      }
    }
  }, animationDuration);

  useEffect(() => {
    //init settings for infinite loop
    if (sliderRef.current) {
      sliderRef.current.style.transitionDuration = `${animationDuration}ms`;
      sliderRef.current.style.transitionTimingFunction = `${easingAnimation}`;
    }
  }, []);

  useEffect(() => {
    // infinite loop

    if (sliderRef.current) {
      const sliderEl = sliderRef.current;
      const slidesCount = sliderEl.children.length;
      const maxMoveBy = (slidesCount - 1) * 100;

      const infiniteLoop = () => {
        if (moveBy >= maxMoveBy || moveBy < 0) {
          sliderEl.style.transitionDuration = '0ms';
          setDelayInfinityLoop(animationDelay);
          setMoveBy(0);
        } else if (moveBy === maxMoveBy - 100) {
          setDelayInfinityLoop(animationDuration);
          setMoveBy(moveBy + 100);
        } else {
          sliderEl.style.transitionDuration = `${animationDuration}ms`;
          setDelayInfinityLoop(animationDelay);
          setMoveBy(moveBy + 100);
        }
      };
      interval = window.setInterval(infiniteLoop, delayInfinityLoop);
    }

    return () => {
      window.clearInterval(interval);
    };
  }, [moveBy, delayInfinityLoop]);

  useEffect(() => {
    // update position of sliders wrapper
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-moveBy}vw)`;
    }
  }, [moveBy]);

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
      <Slider ref={sliderRef}>
        {slidersData.slides.map(({ id, title, subtitle, slideImage: { alt, gatsbyImageData } }) => (
          <CarouselSlide
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            slideImage={{ alt, gatsbyImageData }}
          />
        ))}
        <CarouselSlide
          id={firstSlide.id}
          title={firstSlide.title}
          subtitle={firstSlide.subtitle}
          slideImage={firstSlide.slideImage}
        />
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
