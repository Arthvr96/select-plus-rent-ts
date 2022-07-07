import styled from 'styled-components';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';

export const StyledSectionTemplate = styled(SectionTemplate)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -15px 20px -6px rgba(0, 0, 0, 0.3);

  ${({ theme }) => theme.mq.tablet} {
    padding: 5rem 4rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    height: 100vh;
    padding: 0;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 1rem;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    width: fit-content;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4.5vw;
    grid-row-gap: 6vh;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.decors.lightGrey};
  border-radius: 5px;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    justify-content: space-around;
    height: auto;
    min-height: 20rem;
    padding: 2rem 0;
  }

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    justify-content: center;
    width: 35rem;
    height: auto;
    min-height: 25rem;
  }

  h3 {
    width: calc(100% - 4rem);
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.title5};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.black};

    ${({ theme }) => theme.mq.laptop} {
      width: 100%;
      margin: 1.5rem 0;
      font-size: ${({ theme }) => theme.fontSize.title4};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }

  p {
    display: none;
    width: 90%;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text.black};
    text-align: center;

    ${({ theme }) => theme.mq.tablet} {
      display: inline-block;
    }

    ${({ theme }) => theme.mq.laptop} {
      display: inline-block;
    }
  }
`;
