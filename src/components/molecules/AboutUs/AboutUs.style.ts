import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text.white};
  margin: ${({ margin = '0' }: { margin?: string }) => margin};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
