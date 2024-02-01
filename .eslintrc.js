/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:react/recommended"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {
    'comma-dangle': 0,
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    semi: 0,
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
      multilineDetection: 'brackets',
    }],
    '@typescript-eslint/semi': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
