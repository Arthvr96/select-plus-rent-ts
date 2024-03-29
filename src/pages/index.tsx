import React from 'react';
import { graphql } from 'gatsby';
import { CarsData, HeroSlides } from 'globalTypes';
import IndexTemplate from 'components/templates/IndexTemplate/IndexTemplate';
import NavBar from 'components/organisms/NavBar/NavBar';
import { MemoizedHero } from 'components/organisms/Hero/Hero';
import FeaturesList from 'components/organisms/FeaturesList/FeaturesList';
import CarsList from 'components/organisms/CarsList/CarsList';
import AdditionalServices from 'components/organisms/AdditionalServices/AdditionalServices';
import FixedFooterSections from 'components/templates/FixedFooterSections/FixedFooterSections';

interface IIndexData {
  data: {
    heroSlides: HeroSlides;
    carsData: CarsData;
    infoSectionBg: {
      publicURL: string;
    };
  };
}

const Index = ({ data: { heroSlides, carsData, infoSectionBg } }: IIndexData) => {
  return (
    <IndexTemplate>
      <NavBar />
      <MemoizedHero id="home" slidersData={heroSlides} />
      <FeaturesList />
      <CarsList id="offer" carsData={carsData} />
      <AdditionalServices />
      <FixedFooterSections ids={['whyus', 'contact']} infoSectionBg={infoSectionBg} />
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
    infoSectionBg: file(relativePath: { regex: "/infoBg.webp/" }) {
      publicURL
    }
  }
`;

export default Index;
