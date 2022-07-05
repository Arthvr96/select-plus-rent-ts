import React from 'react';
import { ICarouselSlide } from 'globalTypes';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Slide, SlideContentWrapper, StyledImg } from './CarouselSlide.style';

const CarouselSlide = ({
  title,
  subtitle,
  slideImage: { alt, gatsbyImageData },
}: ICarouselSlide) => {
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
      <StyledImg alt={alt} image={gatsbyImageData} />
    </Slide>
  );
};

export default CarouselSlide;
