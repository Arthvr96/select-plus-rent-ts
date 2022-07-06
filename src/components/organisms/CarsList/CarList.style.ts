import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hgroup {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 110px repeat(2, 1fr);
    grid-column-gap: 7.5rem;
    grid-row-gap: 5rem;

    hgroup {
      grid-area: 1 / 1 / 2 / 3;
    }
  }
`;
