import React from 'react';
import CarItem from 'components/organisms/CarItem/CarItem';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { CarsData } from 'globalTypes';
import { Wrapper } from './CarList.style';

interface ICarList {
  id?: string;
  carsData: CarsData;
}

const CarsList = ({ id, carsData }: ICarList) => {
  return (
    <SectionTemplate id={id}>
      <Wrapper>
        <hgroup>
          <Title variant="sectionTitleBlack">Flota pojazdów Select + Rent</Title>
          <Subtitle variant="sectionSubtitleBlack" margin="1rem 0 3rem">
            Zrealizuj swoje marzenia z naszą pomocą
          </Subtitle>
        </hgroup>
        {carsData.cars.map((car) => (
          <CarItem key={car.id} carData={car} />
        ))}
      </Wrapper>
    </SectionTemplate>
  );
};

export default CarsList;
