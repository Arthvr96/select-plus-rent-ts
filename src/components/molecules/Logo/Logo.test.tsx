import React from 'react';
import { render, screen } from 'test-utils';
import Logo from './Logo';

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
  it('should render logo withNoLink type', () => {
    render(<Logo type="withNoLink" desktopNavVariant="big" />);
    const label = screen.queryByText('Select Plus Rent');
    expect(label).toBeNull();
  });
});
