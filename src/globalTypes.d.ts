import { IGatsbyImageData } from 'gatsby-plugin-image';

type HeroSlides = {
  slides: {
    id: string;
    title: string;
    subtitle: string;
    slideImage: { alt: string; gatsbyImageData: IGatsbyImageData };
  }[];
};

const EaseNames = {
  Ease: 'ease',
  EaseIn: 'ease-in',
  EaseOut: 'ease-out',
  EaseInOut: 'ease-in-out',
  Linear: 'linear',
} as const;

interface ICarouselProps {
  slidersData: HeroSlides;
  settings: {
    animationDuration: number;
    animationDelay: number;
    easingAnimation: typeof EaseNames[keyof typeof EaseNames];
  };
}
