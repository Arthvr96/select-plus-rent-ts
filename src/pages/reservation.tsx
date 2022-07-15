import React, { useEffect } from 'react';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { Title } from 'components/atoms/Title/Title';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import { CarsData } from 'globalTypes';

const StyledSection = styled(SectionTemplate)`
  padding: 0;
`;

const StyledSlider = styled.div`
  width: 100vw;
  height: 40vh;
  min-height: 300px;
  background-color: green;
`;

interface IReservation extends PageProps {
  data: {
    carsData: CarsData;
  };
}

const Reservation = ({ location, data: { carsData } }: IReservation) => {
  return (
    <StyledSection>
      <StyledSlider />
      <Title variant="sectionTitleBlack">Reservation page</Title>
    </StyledSection>
  );
};

export const query = graphql`
  query {
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
  }
`;

export default Reservation;
