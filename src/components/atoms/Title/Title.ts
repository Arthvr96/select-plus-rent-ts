import styled from 'styled-components';
import { IHeaders } from 'globalTypes';

interface ITitle extends IHeaders {
  size: 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6';
  as: 'h2' | 'h3' | 'h4';
  weight?: 'heavy' | 'bold' | 'regular';
}

export const Title = styled.h2<ITitle>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  font-weight: ${({ theme, weight = 'bold' }) => theme.fontWeight[weight]};
  color: ${({ theme, color = 'black' }) => theme.colors.text[color]};
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  text-align: ${({ textAlign = 'center' }) => textAlign};
  width: 100%;
`;
