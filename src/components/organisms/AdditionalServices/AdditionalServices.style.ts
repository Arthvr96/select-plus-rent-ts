import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5.5rem;
`;

export const Services = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;

  ${({ theme }) => theme.mq.laptop} {
    grid-column-gap: 8rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 0 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.decors.lightGrey};
  }

  li p {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.black};
  }
`;
