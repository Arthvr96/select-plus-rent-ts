import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: ${({ margin }: { margin?: string }) => margin};

  ${({ theme }) => theme.mq.laptop} {
    justify-content: flex-start;
    transform: translateX(-10px);
  }

  a {
    position: relative;
    display: block;
    cursor: pointer;
    padding: 1rem 2rem;
    text-indent: -999rem;
  }

  a svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  a:first-child {
    margin-right: 2rem;
  }
`;
