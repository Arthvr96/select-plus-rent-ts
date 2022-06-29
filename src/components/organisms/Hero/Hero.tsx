import React from 'react';
import { HeroSlides } from 'globalTypes';
import Carousel from 'components/organisms/Carousel/Carousel';
import { Wrapper } from './Hero.style';

interface IHeroType {
  slidersData: HeroSlides;
  id: string;
}

const Hero = ({ slidersData, id }: IHeroType) => {
  return (
    <Wrapper id={id}>
      <Carousel
        slidersData={slidersData}
        settings={{ animationDuration: 400, animationDelay: 3500, easingAnimation: 'ease-in-out' }}
      />
    </Wrapper>
  );
};

export default Hero;
