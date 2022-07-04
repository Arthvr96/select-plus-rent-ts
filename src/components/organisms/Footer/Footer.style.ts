import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { IWindowsSize } from 'globalTypes';

export const StyledSectionTemplate = styled(SectionTemplate)`
  padding: 0;
`;

interface IWrapper extends IWindowsSize {
  isNavHidden: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};
  padding: ${({ isNavHidden }) =>
    isNavHidden ? '1rem 1.5rem 8.5rem 1.5rem' : '4.5rem 1.5rem 8.5rem 1.5rem'};
  transition: padding 0.25s ease-in;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
`;
