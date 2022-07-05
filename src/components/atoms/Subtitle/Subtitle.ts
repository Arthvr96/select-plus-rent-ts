import styled, { css } from 'styled-components';
import { IHeaders } from 'globalTypes';

interface ISubtitle extends IHeaders {
  as?: 'h4' | 'p';
  variant: 'heroSubtitle' | 'sectionSubtitleBlack' | 'sectionSubtitleWhite' | 'carItemSubtitle';
}

const heroSubtitle = css`
  width: 85%;
  font-size: ${({ theme }) => theme.fontSize.subtitle4};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text.white};

  ${({ theme }) => theme.mq.laptop} {
    width: 92%;
    font-size: ${({ theme }) => theme.fontSize.subtitle1};
  } ;
`;

const sectionSubtitle = css`
  font-size: ${({ theme }) => theme.fontSize.subtitle4};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const sectionSubtitleWhite = css`
  ${sectionSubtitle};
  color: ${({ theme }) => theme.colors.text.white};
`;

const carItemSubtitle = css`
  font-size: ${({ theme }) => theme.fontSize.subtitle4};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: left;
`;

export const Subtitle = styled.h4<ISubtitle>`
  width: 100%;
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  color: ${({ theme }) => theme.colors.text.black};
  text-align: ${({ textAlign = 'center' }) => textAlign};

  ${({ variant }) => {
    switch (variant) {
      case 'heroSubtitle':
        return heroSubtitle;
      case 'sectionSubtitleBlack':
        return sectionSubtitle;
      case 'sectionSubtitleWhite':
        return sectionSubtitleWhite;
      case 'carItemSubtitle':
        return carItemSubtitle;
      default:
        return null;
    }
  }}
`;
