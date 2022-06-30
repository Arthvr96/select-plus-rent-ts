import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  z-index: 105;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
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

  p:first-child {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.title3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.white};
    text-align: center;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.subtitle4};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.white};
    text-transform: uppercase;
    text-align: center;
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
