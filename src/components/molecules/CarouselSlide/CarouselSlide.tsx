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
        <Title as="h2" size="title4" color="white">
          {title}
        </Title>
        <Subtitle as="h3" size="subtitle4" color="white" margin="1.5rem 0 0 0" weight="regular">
          {subtitle}
        </Subtitle>
      </SlideContentWrapper>
      <StyledImg alt={alt} image={gatsbyImageData} />
    </Slide>
  );
};

export default CarouselSlide;
