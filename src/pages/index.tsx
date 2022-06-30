import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { CarsData, HeroSlides, InfoBg } from 'globalTypes';
import IndexTemplate from 'components/templates/IndexTemplate/IndexTemplate';
import NavBar from 'components/organisms/NavBar/NavBar';
import Hero from 'components/organisms/Hero/Hero';
import FeaturesList from 'components/organisms/FeaturesList/FeaturesList';
import CarsList from 'components/organisms/CarsList/CarsList';
import AdditionalServices from 'components/organisms/AdditionalServices/AdditionalServices';
import InfoSection from 'components/organisms/InfoSection/InfoSection';

interface IIndexData {
  data: {
    heroSlides: HeroSlides;
    carsData: CarsData;
    infoBg: InfoBg;
  };
}

const El = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bg }: { bg: string }) => bg};
`;

const Index = ({ data: { heroSlides, carsData, infoBg } }: IIndexData) => {
  return (
    <IndexTemplate>
      <NavBar />
      <Hero id="home" slidersData={heroSlides} />
      <FeaturesList />
      <CarsList id="offer" carsData={carsData} />
      <AdditionalServices id="services" />
      <InfoSection imgBgSrc={infoBg} />
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
    carsData: allContentfulCars {
      cars: nodes {
        id
        carName
        shortDescription
        info
        prices
        gallery {
          alt: description
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    infoBg: file(relativePath: { eq: "infoBg.jpg" }) {
      img: childImageSharp {
        gatsbyImageData(
          quality: 100
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default Index;
