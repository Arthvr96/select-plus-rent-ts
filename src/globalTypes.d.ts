import { IGatsbyImageData } from 'gatsby-plugin-image';

type ContentFullImage = { alt: string; gatsbyImageData: IGatsbyImageData };

interface ICarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  slideImage: ContentFullImage;
}

interface ICar {
  id: string;
  carName: string;
  shortDescription: string;
  info: string[];
  prices: string[];
  gallery: ContentFullImage[];
}

type HeroSlides = {
  slides: ICarouselSlide[];
};

type CarsData = {
  cars: ICar[];
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

interface IHeaders {
  color?: 'white' | 'black';
  textAlign?: 'center' | 'left' | 'right';
  margin?: string;
  padding?: string;
}
