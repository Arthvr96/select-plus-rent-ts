import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  ${({ theme }) => theme.mq.laptop} {
    height: 100%;
    grid-column-gap: 2vh;
    grid-row-gap: 2vh;
  }
`;

export const PerkItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(216, 216, 216, 0) 0%,
    rgba(216, 216, 216, 0.1) 100%
  );

  ${({ theme }) => theme.mq.laptop} {
    width: 100%;
    height: 100%;
  }

  p:first-child {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.title3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.white};
    text-align: center;

    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.fontSize.title2};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.title1};
    }
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.subtitle4};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.white};
    text-transform: uppercase;
    text-align: center;

    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.fontSize.subtitle3};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.subtitle2};
    }
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, -10%);
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
