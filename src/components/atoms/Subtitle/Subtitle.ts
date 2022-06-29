import styled from 'styled-components';

interface ISubtitleTypes {
  size: 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'subtitle5';
  weight?: 'bold' | 'regular' | 'light';
  color?: 'white' | 'black';
  margin?: string;
  padding?: string;
  as: string;
}

export const Subtitle = styled.h3<ISubtitleTypes>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight = 'light' }) => theme.fontWeight[weight]};
  color: ${({ theme, color = 'black' }) => theme.colors.text[color]};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: center;
  width: 85%;
`;
