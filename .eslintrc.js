module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: false,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    quotes: ['error', 'single'],
    'class-methods-use-this': 'off',
    camelcase: 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-unused-vars': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    '@typescript-eslint/no-unused-vars': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    ],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 0,
    'react/forbid-prop-types': [1, { forbid: ['any', 'array'] }],
    'react/destructuring-assignment': [
      0,
      'always',
      { ignoreClassFields: true },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
