import React, { useEffect, useRef } from 'react';
import { HeroSlides } from 'globalTypes';
import Carousel from 'components/organisms/Carousel/Carousel';
import { Wrapper } from './Hero.style';
import { useIndexContext } from 'providers/IndexContextProvider';
import { ParallaxPlaceholder } from 'components/atoms/ParallaxPlaceholder/ParallaxPlaceholder';

interface IHeroType {
  slidersData: HeroSlides;
  id: string;
}

const Hero = ({ slidersData, id }: IHeroType) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isHideHero } = useIndexContext();

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        if (scrollY < window.innerHeight) {
          wrapperRef.current.style.transform = `translateY(${-window.scrollY / 3}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id={id} />
      {!isHideHero ? (
        <Wrapper ref={wrapperRef}>
          <Carousel
            slidersData={slidersData}
            settings={{
              animationDuration: 400,
              animationDelay: 3500,
              easingAnimation: 'ease-in-out',
            }}
          />
        </Wrapper>
      ) : null}
      <ParallaxPlaceholder height="70vh" />
    </>
  );
};

export default Hero;
