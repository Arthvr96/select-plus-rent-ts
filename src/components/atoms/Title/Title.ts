import styled, { css } from 'styled-components';
import { IHeaders } from 'globalTypes';

interface ITitle extends IHeaders {
  as?: 'h2' | 'h3' | 'h4' | 'p';
  variant:
    | 'heroHeader'
    | 'sectionTitleBlack'
    | 'sectionTitleWhite'
    | 'carItemHeader'
    | 'contactHeaderLeft'
    | 'contactHeaderRight';
}

const heroHeader = css`
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.title4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.white};

  ${({ theme }) => theme.mq.laptop} {
    width: 92%;
    font-size: ${({ theme }) => theme.fontSize.heroHeading};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
  } ;
`;

const sectionTitle = css`
  font-size: ${({ theme }) => theme.fontSize.title4};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.fontSize.title1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const sectionTitleWhite = css`
  ${sectionTitle};
  color: ${({ theme }) => theme.colors.text.white};
`;

const carItemHeader = css`
  font-size: ${({ theme }) => theme.fontSize.title6};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: left;

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.fontSize.title4};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const contactHeader = css`
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.white};
  text-align: left;
`;

const contactHeaderRight = css`
  ${contactHeader};
  text-align: right;
`;

export const Title = styled.h3<ITitle>`
  width: 100%;
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  color: ${({ theme }) => theme.colors.text.black};
  text-align: ${({ textAlign = 'center' }) => textAlign};

  ${({ variant }) => {
    switch (variant) {
      case 'heroHeader':
        return heroHeader;
      case 'sectionTitleBlack':
        return sectionTitle;
      case 'sectionTitleWhite':
        return sectionTitleWhite;
      case 'carItemHeader':
        return carItemHeader;
      case 'contactHeaderLeft':
        return contactHeader;
      case 'contactHeaderRight':
        return contactHeaderRight;
    }
  }}
`;
