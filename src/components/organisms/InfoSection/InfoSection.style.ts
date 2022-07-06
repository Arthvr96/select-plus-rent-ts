import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { IWindowsSize } from 'globalTypes';

export const StyledSectionTemplate = styled(SectionTemplate)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.fixedInfoSection};
  padding: 0 1.5rem;
  background: url(${({ srcBg }: { srcBg: string }) => srcBg}) center center;
  background-size: cover;

  ${({ theme }) => theme.mq.laptop} {
    padding: 0 10rem;
  }

  hgroup {
    ${({ theme }) => theme.mq.laptop} {
      align-self: center;
    }
  }

  hgroup h3 {
    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.fontSize.title2};
    }
  }

  hgroup h4 {
    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.fontSize.subtitle3};
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    background: linear-gradient(0deg, rgba(12, 33, 42, 0.3) 0%, rgba(12, 33, 42, 1) 80%);

    ${({ theme }) => theme.mq.laptop} {
      height: 50vh;
      background: rgba(12, 33, 42, 0.8);
    }
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

    ${({ theme }) => theme.mq.laptop} {
      display: none;
    }
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

  ${({ theme }) => theme.mq.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 40px;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;
    height: 50vh;
    padding: 1% 0 1% 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-row-gap: 2.5rem;
  }
`;

export const DisclaimersWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
