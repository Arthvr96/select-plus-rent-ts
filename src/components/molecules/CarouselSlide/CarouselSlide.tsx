import React from 'react';
import { ICarouselSlide } from 'globalTypes';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Slide, SlideContentWrapper, StyledImg } from './CarouselSlide.style';

const CarouselSlide = ({ title, subtitle, slideImage }: ICarouselSlide) => {
  return (
    <Slide>
      <SlideContentWrapper>
        <Title variant="heroHeader" as="h2">
          {title}
        </Title>
        <Subtitle variant="heroSubtitle" margin="1.5rem 0 0 0">
          {subtitle}
        </Subtitle>
      </SlideContentWrapper>
      {slideImage ? <StyledImg alt={slideImage.alt} image={slideImage.gatsbyImageData} /> : null}
    </Slide>
  );
};

export default CarouselSlide;
