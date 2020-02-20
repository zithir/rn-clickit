module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] },
    ],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        mjs: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    //  styles need other than camel-case names
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'implicit-arrow-linebreak': 0, // Prettier problem
    // Used because of mobile
    'no-alert': 0,
    'object-curly-newline': 0, // Prettier problem
    'arrow-parens': 0,
    // Redundnant with TS
    'react/prop-types': 0,
  },
};
