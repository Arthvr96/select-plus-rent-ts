import React from 'react';
import { render, screen } from 'test-utils';
import { NavBarWrapper } from './NavBar.style';

describe('NavBar tests', () => {
  it('Check if the nav bar is visible', () => {
    render(
      <NavBarWrapper desktopNavVariant="big" isHidden={false} showShadow={false}>
        <h2>Test</h2>
      </NavBarWrapper>
    );
    const testingHeader = screen.getByText('Test');
    expect(testingHeader.parentElement).toHaveStyle({
      transform: 'translateY(0)',
    });
  });
  it('Check if the nav bar is not visible', () => {
    render(
      <NavBarWrapper desktopNavVariant="big" isHidden={true} showShadow={false}>
        <h2>Test</h2>
      </NavBarWrapper>
    );
    const testingHeader = screen.getByText('Test');
    expect(testingHeader.parentElement).toHaveStyle({
      transform: 'translateY(-100%)',
    });
  });
});
