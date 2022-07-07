import styled, { css } from 'styled-components';
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
    ${({ theme }) => theme.mq.tablet} {
      align-self: center;
    }

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

    ${({ theme }) => theme.mq.tablet} {
      height: 50vh;
      background: rgba(12, 33, 42, 0.8);
    }

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

    ${({ theme }) => theme.mq.tablet} {
      display: none;
    }

    ${({ theme }) => theme.mq.laptop} {
      display: none;
    }
  }
`;

const mixinWrapper = css`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 40px;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
  height: 50vh;
  padding: 1% 0 1% 0;
`;

export const Wrapper = styled.div<IWindowsSize>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 1fr 30px;
  grid-row-gap: 1rem;
  height: ${({ height }) => height}px;
  padding-top: 6.5rem;
  transition: height 0.2s ease-in;

  ${({ theme }) => theme.mq.tablet} {
    ${mixinWrapper};
  }

  ${({ theme }) => theme.mq.laptop} {
    ${mixinWrapper};
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-row-gap: 2.5rem;
  }
`;

const mixinDisclaimersWrapper = css`
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const DisclaimersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-area: 2 / 2 / 3 / 3;
    ${mixinDisclaimersWrapper};
  }

  ${({ theme }) => theme.mq.laptop} {
    grid-area: 2 / 2 / 3 / 3;
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
  }

  ${({ theme }) => theme.mq.desktop} {
    ${mixinDisclaimersWrapper};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
