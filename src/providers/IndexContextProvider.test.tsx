import React from 'react';
import IndexContextProvider from './IndexContextProvider';
import { render, screen, fireEvent } from 'test-utils';
import { IndexTestingComponent, setWindowSize } from 'helpers/testing';
import { waitFor } from '@testing-library/react';

const handleRender = (testID: number) =>
  render(
    <IndexContextProvider>
      <IndexTestingComponent testID={testID} />
    </IndexContextProvider>
  );

describe('IndexContextProvider', () => {
  it('check if isMobile value is changed correctly after window resize | testID 0', () => {
    handleRender(0);

    setWindowSize('width', 1440);
    const isMobile = screen.getByTestId('isMobile');
    expect(isMobile).toHaveTextContent('false');

    setWindowSize('width', 500);
    expect(isMobile).toHaveTextContent('true');
  });

  it('check if isHamburgerOpen change state correctly  | testID 1', () => {
    handleRender(1);

    setWindowSize('width', 500);

    const button = screen.getByText('hamburger');
    const isHamburgerOpen = screen.getByTestId('isHamburgerOpen');
    expect(isHamburgerOpen).toHaveTextContent('false');

    fireEvent.click(button);
    expect(isHamburgerOpen).toHaveTextContent('true');

    fireEvent.click(button);
    expect(isHamburgerOpen).toHaveTextContent('false');

    setWindowSize('width', 1440);
    fireEvent.click(button);
    expect(isHamburgerOpen).toHaveTextContent('false');
  });

  it('check if setScrolling change state correctly', () => {
    handleRender(2);

    const button = screen.getByText('scrollTo');
    const isScrolling = screen.getByTestId('isScrolling');
    const isNavHidden = screen.getByTestId('isNavHidden');
    expect(isScrolling).toHaveTextContent('false');
    expect(isNavHidden).toHaveTextContent('false');

    fireEvent.click(button);
    expect(isScrolling).toHaveTextContent('true');
    expect(isNavHidden).toHaveTextContent('false');
  });
});
