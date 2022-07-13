import React from 'react';
import { render, screen } from 'test-utils';
import NavigationList from './NavigationList';
import { routes } from './NavigationList';
import IndexContextProvider, { useIndexContext } from 'providers/IndexContextProvider';
import { setWindowSize } from 'helpers/testing';
import { fireEvent } from '@testing-library/react';

const TestingComponent = () => {
  const { isScrolling, isHamburgerOpen } = useIndexContext();

  return (
    <>
      <p data-testid="isScrolling">{isScrolling.toString()}</p>
      <p data-testid="isHamburgerOpen">{isHamburgerOpen.toString()}</p>
    </>
  );
};

describe('Navigation List', () => {
  it('should render every one link from the list', () => {
    render(<NavigationList />);
    routes.forEach((el) => {
      const link = screen.getByText(el[0]).closest('a');
      expect(link).toHaveAttribute('href', el[1]);
    });
  });

  it('should called handleClick whenever link is clicked', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <NavigationList />
      </IndexContextProvider>
    );

    const isScrolling = screen.getByTestId('isScrolling');
    const isHamburgerOpen = screen.getByTestId('isHamburgerOpen');
    const link = screen.getByText(routes[0][0]);

    setWindowSize('width', 450);

    expect(isScrolling).toHaveTextContent('false');
    expect(isHamburgerOpen).toHaveTextContent('false');

    fireEvent.click(link);
    expect(isScrolling).toHaveTextContent('true');
    expect(isHamburgerOpen).toHaveTextContent('true');
  });
});
