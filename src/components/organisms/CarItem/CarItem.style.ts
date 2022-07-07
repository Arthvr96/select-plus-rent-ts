import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 2.5rem;
  box-shadow: 0px 2px 21px rgba(0, 0, 0, 0.12);
`;

export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 50%;
`;

export const Content = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  ${({ theme }) => theme.mq.laptop} {
    padding: 3rem 2rem;
  }
`;
