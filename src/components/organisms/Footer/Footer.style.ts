import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';

export const StyledSectionTemplate = styled(SectionTemplate)`
  padding: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding: 2.5rem 1.5rem 8.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
`;
