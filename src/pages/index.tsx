import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HeroSlides } from 'globalTypes';
import IndexTemplate from 'components/templates/IndexTemplate/IndexTemplate';
import NavBar from 'components/organisms/NavBar/NavBar';
import Hero from 'components/organisms/Hero/Hero';
import FeaturesList from 'components/organisms/FeaturesList/FeaturesList';

interface IIndexData {
  data: {
    heroSlides: HeroSlides;
  };
}

const El = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bg }: { bg: string }) => bg};
`;

const Index = ({ data: { heroSlides } }: IIndexData) => {
  return (
    <IndexTemplate>
      <NavBar />
      <Hero id="home" slidersData={heroSlides} />
      <FeaturesList />
      <El id="offer" bg={'red'} />
      <El id="services" bg={'green'} />
      <El id="contact" bg={'purple'} />
    </IndexTemplate>
  );
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
