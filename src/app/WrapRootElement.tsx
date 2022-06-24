import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <MainTemplate>{element}</MainTemplate>;
};

export default wrapRootElement;
