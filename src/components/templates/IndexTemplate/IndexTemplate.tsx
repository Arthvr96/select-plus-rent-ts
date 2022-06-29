import React, { ReactNode } from 'react';
import IndexContextProvider from 'providers/IndexContextProvider';

interface IIndexTemplate {
  children: ReactNode;
}

const IndexTemplate = ({ children }: IIndexTemplate) => {
  return <IndexContextProvider>{children}</IndexContextProvider>;
};

export default IndexTemplate;
