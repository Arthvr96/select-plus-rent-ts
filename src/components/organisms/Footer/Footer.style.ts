import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { IWindowsSize } from 'globalTypes';

export const StyledSectionTemplate = styled(SectionTemplate)`
  padding: 0;
`;

export const Wrapper = styled.div<IWindowsSize>`
  display: grid;
  grid-template-rows: 1fr 1fr 60px;
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};
  padding: 1rem 0 0 0;
  transition: height 0.2s ease-in;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1.5rem;
`;
