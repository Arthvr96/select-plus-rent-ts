import styled from 'styled-components';

export const List = styled.ul`
  margin: 1rem 0;

  li {
    position: relative;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.thumbnail};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.black};
    text-indent: 10px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.bg.blue};
  }
`;
