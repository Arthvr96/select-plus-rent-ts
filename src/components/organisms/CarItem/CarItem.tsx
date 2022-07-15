import React from 'react';
import { ICar } from 'globalTypes';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import PricesList from 'components/molecules/PricesList/PricesList';
import InfoList from 'components/molecules/InfoList/InfoList';
import { Wrapper, StyledImg, Content } from './CarItem.style';

interface ICarItem {
  carData: ICar;
}

const CarItem = ({
  carData: { id, carName, info, prices, shortDescription, gallery },
}: ICarItem) => {
  return (
    <Wrapper>
      <StyledImg image={gallery[0].gatsbyImageData} alt={gallery[0].alt} />
      <Content>
        <Title variant="carItemHeader" as="h4" margin="0 0 0.9rem">
          {carName}
        </Title>
        <Subtitle variant="carItemSubtitle" as="p">
          {shortDescription}
        </Subtitle>
        <InfoList info={info} />
        <PricesList idCar={id} prices={prices} />
      </Content>
    </Wrapper>
  );
};

export default CarItem;
