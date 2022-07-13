import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import Logo from './Logo';
import IndexContextProvider, { useIndexContext } from 'providers/IndexContextProvider';
import { setWindowSize } from 'helpers/testing';

const TestingComponent = () => {
  const { isHamburgerOpen, handleToggleHamburger } = useIndexContext();

  return (
    <>
      <button onClick={handleToggleHamburger}>toggleHamburger</button>
      <p data-testid="isHamburgerOpen">{isHamburgerOpen.toString()}</p>
    </>
  );
};

describe('Logo', () => {
  it('should render logo withLinkPrimary type', () => {
    render(<Logo type="withLinkPrimary" desktopNavVariant="big" />);
    const label = screen.getByText('Select Plus Rent').closest('h1');
    expect(label).toBeVisible();
  });
  it('should render logo withLinkSecondary type', () => {
    render(<Logo type="withLinkSecondary" desktopNavVariant="big" />);
    const label = screen.getByText('Select Plus Rent').closest('h3');
    expect(label).toBeVisible();
  });
  it('should render logo default type', () => {
    render(<Logo desktopNavVariant="big" />);
    const label = screen.queryByText('Select Plus Rent');
    expect(label).toBeNull();
  });
  it('should toggleHamburger onClick', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <Logo type="withLinkPrimary" desktopNavVariant="big" />
      </IndexContextProvider>
    );
    const logoButton = screen.getByText('Select Plus Rent').parentElement;
    const toggleHamburger = screen.getByText('toggleHamburger');
    const isHamburgerOpen = screen.getByTestId('isHamburgerOpen');

    setWindowSize('width', 450);
    expect(isHamburgerOpen).toHaveTextContent('false');

    fireEvent.click(toggleHamburger);
    expect(isHamburgerOpen).toHaveTextContent('true');

    logoButton && fireEvent.click(logoButton);
    expect(isHamburgerOpen).toHaveTextContent('false');
  });

  it('should not toggleHamburger onClick', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <Logo type="withLinkPrimary" desktopNavVariant="big" />
      </IndexContextProvider>
    );
    const logoButton = screen.getByText('Select Plus Rent').parentElement;
    const isHamburgerOpen = screen.getByTestId('isHamburgerOpen');

    setWindowSize('width', 450);
    expect(isHamburgerOpen).toHaveTextContent('false');

    logoButton && fireEvent.click(logoButton);
    expect(isHamburgerOpen).toHaveTextContent('false');
  });
});
