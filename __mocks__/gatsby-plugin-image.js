const React = require('react');
const gatsbyPlugin = jest.requireActual('gatsby-plugin-image');

module.exports = {
  ...gatsbyPlugin,
  GatsbyImage: jest.fn().mockImplementation(({ imgClassName, ...props }) =>
    React.createElement('img', {
      ...props,
      className: imgClassName,
    })
  ),
};
