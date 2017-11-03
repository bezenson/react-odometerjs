module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
  },
};
