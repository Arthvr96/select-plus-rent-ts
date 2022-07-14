import { CarsData, ContentFullImage, HeroSlides } from 'globalTypes';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const gatsbyImageDataMock: IGatsbyImageData = {
  layout: 'fixed',
  width: 150,
  height: 150,
  images: {},
};

export const contentFullImageMock: ContentFullImage = {
  alt: 'Testing alt',
  gatsbyImageData: gatsbyImageDataMock,
};

export const heroSlidesMock: HeroSlides = {
  slides: [
    {
      id: '0',
      title: 'slide1-title',
      subtitle: 'slide1-subtitle',
      slideImage: contentFullImageMock,
    },
    {
      id: '1',
      title: 'slide2-title',
      subtitle: 'slide2-subtitle',
      slideImage: contentFullImageMock,
    },
    {
      id: '2',
      title: 'slide3-title',
      subtitle: 'slide3-subtitle',
      slideImage: contentFullImageMock,
    },
  ],
};

export const carsDataMock: CarsData = {
  cars: [
    {
      id: '0',
      carName: 'Lamborghini Gallardo',
      shortDescription: 'Najbardziej pożądany sportowy samochód na świecie',
      info: ['550KM', '4x4', 'Automatyczna', 'Benzyna'],
      prices: ['2299zl', '5499zl', '9499zl'],
      gallery: [contentFullImageMock],
    },
    {
      id: '1',
      carName: 'Ford Focus RS',
      shortDescription: 'Najczesciej tuningowany samochod na świecie',
      info: ['310KM', 'Przod', 'Automatyczna', 'Benzyna'],
      prices: ['499zl', '1299zl', '2999zl'],
      gallery: [contentFullImageMock],
    },
  ],
};
