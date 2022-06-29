import styled from 'styled-components';

interface ITitleTypes {
  size: 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6';
  weight?: 'heavy' | 'bold' | 'regular';
  color?: 'white' | 'black';
  margin?: string;
  padding?: string;
  as: string;
}

export const Title = styled.h2<ITitleTypes>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight = 'bold' }) => theme.fontWeight[weight]};
  color: ${({ theme, color = 'black' }) => theme.colors.text[color]};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: center;
  width: 80%;
`;
