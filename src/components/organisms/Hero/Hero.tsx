import React from 'react';
import Carousel from 'components/organisms/Carousel/Carousel';
import { HeroSlides } from 'globalTypes';

interface IHeroType {
  slidersData: HeroSlides;
}

const Hero = ({ slidersData }: IHeroType) => {
  return (
    <div>
      <Carousel
        slidersData={slidersData}
        settings={{ animationDuration: 400, animationDelay: 3500, easingAnimation: 'ease-in-out' }}
      />
    </div>
  );
};

export default Hero;
