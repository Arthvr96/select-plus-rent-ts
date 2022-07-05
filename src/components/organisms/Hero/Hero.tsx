import React, { useEffect, useRef } from 'react';
import { HeroSlides } from 'globalTypes';
import Carousel from 'components/organisms/Carousel/Carousel';
import { Wrapper } from './Hero.style';
import { useIndexContext } from 'providers/IndexContextProvider';
import { ParallaxPlaceholder } from 'components/atoms/ParallaxPlaceholder/ParallaxPlaceholder';
import { useWindowSize } from 'hooks/useWindowSize';

interface IHeroType {
  slidersData: HeroSlides;
  id: string;
}

const Hero = ({ slidersData, id }: IHeroType) => {
  const { width, height } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isHideHero, moveBy, isDesktop } = useIndexContext();

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateY(${moveBy}px`;
    }
  }, [moveBy]);

  return (
    <>
      <div id={id} />
      {!isHideHero && width ? (
        <Wrapper ref={wrapperRef}>
          <Carousel
            slidersData={slidersData}
            settings={{
              animationDuration: isDesktop ? 700 : 400,
              animationDelay: 3500,
              easingAnimation: 'ease-in-out',
            }}
          />
        </Wrapper>
      ) : null}
      {height && width ? <ParallaxPlaceholder height={isDesktop ? height : height * 0.7} /> : null}
    </>
  );
};

export default Hero;
