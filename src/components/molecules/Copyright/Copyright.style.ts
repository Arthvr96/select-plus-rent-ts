import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.decors.white};
  background-color: ${({ theme }) => theme.colors.bg.blackBlue};

  p {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.text.white};
    text-align: center;
  }
`;
