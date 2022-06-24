module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 2, // This will cause Prettier problems to error
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['./src/pages/*.tsx'],
      rules: {
        'no-unused-expressions': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['gatsby-browser.ts', 'gatsby-ssr.js', '*.styles.*'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
