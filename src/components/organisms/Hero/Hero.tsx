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
  const { height } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isHideHero, moveBy, isMobile } = useIndexContext();

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateY(${moveBy}px`;
    }
  }, [moveBy]);

  return (
    <>
      <div id={id} />
      {!isHideHero ? (
        <Wrapper ref={wrapperRef}>
          <Carousel
            slidersData={slidersData}
            settings={{
              animationDuration: isMobile ? 400 : 700,
              animationDelay: 3500,
              easingAnimation: 'ease-in-out',
            }}
          />
        </Wrapper>
      ) : null}
      {height ? <ParallaxPlaceholder height={isMobile ? `${height * 0.7}px` : '100vh'} /> : null}
    </>
  );
};

export default Hero;
