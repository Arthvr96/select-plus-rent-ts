import styled from 'styled-components';
import { IHeaders } from 'globalTypes';

interface ISubtitle extends IHeaders {
  size: 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'subtitle5';
  as: 'h3' | 'h4' | 'p';
  weight?: 'bold' | 'regular' | 'light';
}

export const Subtitle = styled.h3<ISubtitle>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight = 'light' }) => theme.fontWeight[weight]};
  color: ${({ theme, color = 'black' }) => theme.colors.text[color]};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: ${({ textAlign = 'center' }) => textAlign};
  width: 85%;
`;
