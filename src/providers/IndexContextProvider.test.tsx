import React from 'react';
import IndexContextProvider from './IndexContextProvider';
import { render, screen, fireEvent } from 'test-utils';
import { IndexTestingComponent, setWindowSize } from 'helpers/testing';

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
    let state = screen.getByText('isMobile: false');
    expect(state).toBeTruthy();

    setWindowSize('width', 500);
    state = screen.getByText('isMobile: true');
    expect(state).toBeTruthy();
  });

  it('check if isHamburgerOpen change state correctly  | testID 1', () => {
    handleRender(1);

    setWindowSize('width', 500);

    const button = screen.getByText('hamburger');
    let state = screen.getByText('isHamburgerOpen: false');
    expect(state).toBeTruthy();

    fireEvent.click(button);
    state = screen.getByText('isHamburgerOpen: true');
    expect(state).toBeTruthy();

    fireEvent.click(button);
    state = screen.getByText('isHamburgerOpen: false');
    expect(state).toBeTruthy();

    setWindowSize('width', 1440);
    fireEvent.click(button);
    state = screen.getByText('isHamburgerOpen: false');
    expect(state).toBeTruthy();
  });
});
