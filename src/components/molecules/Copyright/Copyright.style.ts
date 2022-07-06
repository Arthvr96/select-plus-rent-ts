import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6rem;
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
