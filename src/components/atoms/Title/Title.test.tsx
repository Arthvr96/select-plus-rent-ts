import React from 'react';
import { render, screen } from 'test-utils';
import { Title } from './Title';
import { defaultTheme } from 'assets/styles/theme';

describe('Title', () => {
  it('Check title default variables', () => {
    render(<Title variant="heroHeader">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      margin: '0',
      padding: '0',
      'text-align': 'center',
    });
  });
  it('Check title variables', () => {
    render(
      <Title variant="heroHeader" margin="2rem" padding="3rem" textAlign="right">
        title test
      </Title>
    );
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      margin: '2rem',
      padding: '3rem',
      'text-align': 'right',
    });
  });
  it('Check title variant: heroHeader', () => {
    render(<Title variant="heroHeader">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '80%',
      'font-size': defaultTheme.fontSize.title4,
      'font-weight': defaultTheme.fontWeight.bold,
      color: defaultTheme.colors.text.white,
    });
  });
  it('Check title variant: sectionTitleBlack', () => {
    render(<Title variant="sectionTitleBlack">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.title4,
      'font-weight': defaultTheme.fontWeight.bold,
      color: defaultTheme.colors.text.black,
    });
  });
  it('Check title variant: sectionTitleWhite', () => {
    render(<Title variant="sectionTitleWhite">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.title4,
      'font-weight': defaultTheme.fontWeight.bold,
      color: defaultTheme.colors.text.white,
    });
  });
  it('Check title variant: carItemHeader', () => {
    render(<Title variant="carItemHeader">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.title6,
      'font-weight': defaultTheme.fontWeight.regular,
      'text-align': 'left',
      color: defaultTheme.colors.text.black,
    });
  });
  it('Check title variant: contactHeaderLeft', () => {
    render(<Title variant="contactHeaderLeft">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.title3,
      'font-weight': defaultTheme.fontWeight.bold,
      'text-align': 'left',
      color: defaultTheme.colors.text.white,
    });
  });
  it('Check title variant: contactHeaderRight', () => {
    render(<Title variant="contactHeaderRight">title test</Title>);
    const title = screen.getByText('title test');
    expect(title).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.title3,
      'font-weight': defaultTheme.fontWeight.bold,
      'text-align': 'right',
      color: defaultTheme.colors.text.white,
    });
  });
});
