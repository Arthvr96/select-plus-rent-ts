import React from 'react';
import { render, screen } from 'test-utils';
import { contentFullImageMock } from 'mocks/graphqlMocks';
import CarouselSlide from './CarouselSlide';

describe('CarouselSlide', () => {
  it('should render carousel slide', () => {
    render(
      <CarouselSlide id="0" title="title" subtitle="subtitle" slideImage={contentFullImageMock} />
    );
    const title = screen.getByText('title');
    const subtitle = screen.getByText('subtitle');
    const img = screen.getByAltText(contentFullImageMock.alt);
    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    expect(img).toBeVisible();
  });
});
