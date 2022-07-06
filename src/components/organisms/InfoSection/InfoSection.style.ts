import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { IWindowsSize } from 'globalTypes';

export const StyledSectionTemplate = styled(SectionTemplate)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.fixedInfoSection};
  padding: 0 1.5rem;
  background: url(${({ srcBg }: { srcBg: string }) => srcBg}) center center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(0deg, rgba(12, 33, 42, 0.3) 0%, rgba(12, 33, 42, 1) 80%);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(180deg, rgba(12, 33, 42, 0.3) 0%, rgba(12, 33, 42, 1) 80%);
  }
`;

export const Wrapper = styled.div<IWindowsSize>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 5px;
  height: ${({ height }) => height}px;
  padding-top: 6.5rem;
  transition: height 0.2s ease-in;
`;

export const DisclaimersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  padding-bottom: 1rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
