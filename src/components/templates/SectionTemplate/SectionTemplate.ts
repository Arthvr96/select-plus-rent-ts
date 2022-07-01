import styled from 'styled-components';

export const SectionTemplate = styled.section`
  position: relative;
  width: 100vw;
  height: fit-content;
  padding: 2.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.bg.white};
`;
