import styled from 'styled-components';

type Wrapper = {
  isVisible: boolean;
};

export const Wrapper = styled.nav<Wrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  width: 100vw;
  height: 100vh;
  padding-top: 5.5rem;
  background-color: ${({ theme }) => theme.colors.bg.darkBlue};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in;
`;
