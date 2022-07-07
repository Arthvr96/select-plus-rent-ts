import styled from 'styled-components';
import { Link } from 'gatsby';
import { desktopNavVariantType } from 'globalTypes';

interface ILogoWrapper {
  $isPrimary: boolean;
  $desktopNavVariant: desktopNavVariantType | undefined;
}

export const LogoWrapper = styled(Link)<ILogoWrapper>`
  display: flex;
  align-items: center;
  height: 5.5rem;
  cursor: pointer;

  svg {
    transform: scale(1);
    transform-origin: left center;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    width: fit-content;
    text-indent: -999rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    svg {
      transform: scale(1.15);
    }
  }

  ${({ theme }) => theme.mq.laptop} {
    svg {
      transform: scale(
        ${({ $isPrimary, $desktopNavVariant }) =>
          $isPrimary && $desktopNavVariant === 'big' ? 2.3 : 1}
      );
    }
  }
`;
