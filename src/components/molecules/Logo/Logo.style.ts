import styled from 'styled-components';
import { Link } from 'gatsby';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  height: 5.5rem;
  transform: scale(1);
  cursor: pointer;

  h1,
  h2,
  h3,
  h4,
  h5 {
    width: fit-content;
    text-indent: -999rem;
  }
`;
