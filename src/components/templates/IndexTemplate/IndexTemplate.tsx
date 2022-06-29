import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import IndexContextProvider from 'providers/IndexContextProvider';

interface IIndexTemplate {
  children: ReactNode;
}

const IndexTemplate = ({ children }: IIndexTemplate) => {
  return (
    <>
      <Helmet title="Select+Rent" defer={false} />
      <IndexContextProvider>{children}</IndexContextProvider>
    </>
  );
};

export default IndexTemplate;
