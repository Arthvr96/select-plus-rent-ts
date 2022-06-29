import styled from 'styled-components';
import arrow from 'assets/svg/slider/arrow_slider.svg';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
`;

export const Slider = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  transform: translateX(0);
  transition: transform 0.2s ease-in;
`;

type ButtonSliderDirection = { direction: 'left' | 'right' };

export const ButtonSlider = styled.div<ButtonSliderDirection>`
  position: absolute;
  top: 50%;
  z-index: 1000;
  left: ${({ direction }) => (direction === 'left' ? '0px' : 'unset')};
  right: ${({ direction }) => (direction === 'right' ? '0px' : 'unset')};
  transform: translateY(-50%) rotate(${({ direction }) => (direction === 'right' ? '180deg' : 0)});
  width: 30px;
  height: 100%;
  background: url(${arrow}) 50% 50% transparent no-repeat;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: rgba(49, 49, 49, 0.1);
  }
`;
