import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainTemplate>{children}</MainTemplate>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
