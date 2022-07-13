import React from 'react';
import { render, screen } from 'test-utils';
import IndexContextProvider, { useIndexContext } from 'providers/IndexContextProvider';
import NavBar from 'components/organisms/NavBar/NavBar';
import { NavBarWrapper } from './NavBar.style';
import { setWindowSize } from 'helpers/testing';
import { routes } from 'components/molecules/NavigationList/NavigationList';
import { fireEvent } from '@testing-library/react';

const TestingComponent = () => {
  const { isHamburgerOpen, isMobile } = useIndexContext();

  return (
    <>
      <p data-testid="isHamburgerOpen">{isHamburgerOpen.toString()}</p>
      <p data-testid="isMobile">{isMobile.toString()}</p>
    </>
  );
};

describe('NavBar', () => {
  it('should render navbar in desktop version', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <NavBar />
      </IndexContextProvider>
    );
    setWindowSize('width', 1440);
    const isMobile = screen.getByTestId('isMobile');
    expect(isMobile).toHaveTextContent('false');

    routes.forEach((route) => {
      const routeRef = screen.getAllByText(route[0]);
      expect(routeRef).toHaveLength(2);
      expect(routeRef[0]).toBeVisible();
      expect(routeRef[1]).toBeVisible();
    });

    const fb = screen.getAllByText(/Link facebook -/);
    const ig = screen.getAllByText(/Link instagram -/);

    expect(fb).toHaveLength(2);
    expect(ig).toHaveLength(2);
    expect(fb[0]).toBeVisible();
    expect(fb[1]).toBeVisible();
    expect(ig[0]).toBeVisible();
    expect(ig[1]).toBeVisible();

    const siteLogo = screen.getAllByText(/^Select Plus Rent$/);
    expect(siteLogo).toHaveLength(1);
    expect(siteLogo[0]).toBeVisible();
  });

  it('should render navbar in mobile version', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <NavBar />
      </IndexContextProvider>
    );
    setWindowSize('width', 450);
    const isMobile = screen.getByTestId('isMobile');
    expect(isMobile).toHaveTextContent('true');

    routes.forEach((route) => {
      const routeRef = screen.getAllByText(route[0]);
      expect(routeRef).toHaveLength(1);
      expect(routeRef[0]).toBeVisible();
    });

    const fb = screen.getAllByText(/Link facebook -/);
    const ig = screen.getAllByText(/Link instagram -/);

    expect(fb).toHaveLength(1);
    expect(ig).toHaveLength(1);
    expect(fb[0]).toBeVisible();
    expect(ig[0]).toBeVisible();

    const siteLogo = screen.getAllByText(/^Select Plus Rent$/);
    expect(siteLogo).toHaveLength(1);
    expect(siteLogo[0]).toBeVisible();
  });

  it('should trigger hamburgerMenu whenever hamburgerButton is clicked', () => {
    render(
      <IndexContextProvider>
        <TestingComponent />
        <NavBar />
      </IndexContextProvider>
    );
    const isHamburgerOpen = screen.getByTestId('isHamburgerOpen');
    const button = screen.getByText('Closed hamburger button');
    const navbar = button.parentElement;

    expect(isHamburgerOpen).toHaveTextContent('false');
    expect(navbar).toBeVisible();
    expect(navbar).toHaveStyle({
      'box-shadow': '0 4px 4px rgba(0,0,0,0.25)',
    });

    fireEvent.click(button);
    expect(isHamburgerOpen).toHaveTextContent('true');
    expect(button).toHaveTextContent('Opened hamburger button');
    expect(navbar).toHaveStyle({
      'box-shadow': 'none',
    });

    fireEvent.click(button);
    expect(isHamburgerOpen).toHaveTextContent('false');
    expect(button).toHaveTextContent('Closed hamburger button');
  });

  it('should NavBarWrapper be hidden', () => {
    render(
      <NavBarWrapper
        data-testid="navbar"
        isHidden={true}
        desktopNavVariant="big"
        showShadow={true}
      />
    );
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveStyle({
      transform: 'translateY(-100%)',
    });
  });

  it('should NavBarWrapper be visible', () => {
    render(
      <NavBarWrapper
        data-testid="navbar"
        isHidden={false}
        desktopNavVariant="big"
        showShadow={true}
      />
    );
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveStyle({
      transform: 'translateY(0)',
    });
  });
});
