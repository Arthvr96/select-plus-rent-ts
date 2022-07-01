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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => height}px;
  padding-top: 5.5rem;
`;

export const DisclaimersWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
