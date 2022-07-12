import React from 'react';
import { render, screen } from 'test-utils';
import { Subtitle } from './Subtitle';
import { defaultTheme } from 'assets/styles/theme';

describe('Subtitle', () => {
  it('Check subtitle default variables', () => {
    render(<Subtitle variant="heroSubtitle">subtitle test</Subtitle>);
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      margin: '0',
      padding: '0',
      'text-align': 'center',
    });
  });
  it('Check subtitle variables', () => {
    render(
      <Subtitle variant="heroSubtitle" margin="2rem" padding="3rem" textAlign="right">
        subtitle test
      </Subtitle>
    );
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      margin: '2rem',
      padding: '3rem',
      'text-align': 'right',
    });
  });
  it('Check subtitle variant: heroSubtitle', () => {
    render(<Subtitle variant="heroSubtitle">subtitle test</Subtitle>);
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      width: '85%',
      'font-size': defaultTheme.fontSize.subtitle4,
      'font-weight': defaultTheme.fontWeight.light,
      color: defaultTheme.colors.text.white,
    });
  });
  it('Check subtitle variant: sectionSubtitleWhite', () => {
    render(<Subtitle variant="sectionSubtitleWhite">subtitle test</Subtitle>);
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.subtitle4,
      'font-weight': defaultTheme.fontWeight.light,
      color: defaultTheme.colors.text.white,
    });
  });
  it('Check subtitle variant: sectionSubtitleBlack', () => {
    render(<Subtitle variant="sectionSubtitleBlack">subtitle test</Subtitle>);
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.subtitle4,
      'font-weight': defaultTheme.fontWeight.light,
      color: defaultTheme.colors.text.black,
    });
  });
  it('Check subtitle variant: carItemSubtitle', () => {
    render(<Subtitle variant="carItemSubtitle">subtitle test</Subtitle>);
    const subtitle = screen.getByText('subtitle test');
    expect(subtitle).toHaveStyle({
      width: '100%',
      'font-size': defaultTheme.fontSize.subtitle4,
      'font-weight': defaultTheme.fontWeight.light,
      color: defaultTheme.colors.text.black,
      'text-align': 'left',
    });
  });
});
