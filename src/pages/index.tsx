import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import { graphql } from 'gatsby';
import { HeroSlides } from 'globalTypes';

interface IIndexData {
  data: {
    heroSlides: HeroSlides;
  };
}

const Index = ({ data: { heroSlides } }: IIndexData) => {
  return <Hero slidersData={heroSlides} />;
};

export const query = graphql`
  query {
    heroSlides: allContentfulHeroSlider {
      slides: nodes {
        id
        title
        subtitle
        slideImage {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          alt: description
        }
      }
    }
    cars: allContentfulCars {
      nodes {
        id
        carName
        shortDescription
        info
        prices
        gallery {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default Index;
