import React, { useEffect, useRef, useState } from 'react';
import { ICarouselProps } from 'globalTypes';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import {
  CarouselWrapper,
  Slider,
  ButtonSlider,
  StyledImg,
  Slide,
  SlideContentWrapper,
} from './Carousel.style';

const Carousel = ({
  slidersData,
  settings: { animationDuration, animationDelay, easingAnimation },
}: ICarouselProps) => {
  const [moveBy, setMoveBy] = useState(0);
  const [delayInfinityLoop, setDelayInfinityLoop] = useState(animationDelay);
  const sliderRef = useRef<HTMLDivElement>(null);

  const changeSlide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const sliderEl = sliderRef.current;
      const maxMoveBy = (sliderEl.children.length - 1) * 100;
      if (direction === 'left') {
        if (moveBy !== 0) {
          if (delayInfinityLoop === animationDuration) {
            setDelayInfinityLoop(animationDelay);
          }
          if (sliderEl.style.transitionDuration === '0ms') {
            sliderEl.style.transitionDuration = `${animationDuration}ms`;
          }
          setMoveBy(moveBy - 100);
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
        }
      }
    }
  };

  useEffect(() => {
    //necessary for infinite loop
    slidersData.slides.push({ ...slidersData.slides[0], id: `${slidersData.slides[0].id}copy` });
    if (sliderRef.current) {
      sliderRef.current.style.transitionDuration = `${animationDuration}ms`;
      sliderRef.current.style.transitionTimingFunction = `${easingAnimation}`;
    }
  }, []);

  useEffect(() => {
    // infinite loop
    let interval: number;

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
      <ButtonSlider tabIndex={0} onClick={() => changeSlide('left')} direction={'left'} />
      <ButtonSlider tabIndex={0} onClick={() => changeSlide('right')} direction={'right'} />
      <Slider ref={sliderRef}>
        {slidersData.slides.map(({ id, title, subtitle, slideImage: { alt, gatsbyImageData } }) => (
          <Slide key={id}>
            <SlideContentWrapper>
              <Title size={'title4'} as={'h2'} color={'white'}>
                {title}
              </Title>
              <Subtitle
                size={'subtitle4'}
                as={'h3'}
                color={'white'}
                margin={'1.5rem 0 0 0'}
                weight="regular"
              >
                {subtitle}
              </Subtitle>
            </SlideContentWrapper>
            <StyledImg alt={alt} image={gatsbyImageData} />
          </Slide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
