import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import IndexContextProvider from 'providers/IndexContextProvider';

interface IIndexTemplate {
  children: ReactNode;
}

const IndexTemplate = ({ children }: IIndexTemplate) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Select+Rent - Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <IndexContextProvider>{children}</IndexContextProvider>
    </>
  );
};

export default IndexTemplate;
