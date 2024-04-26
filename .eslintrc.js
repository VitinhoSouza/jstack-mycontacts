module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'linebreak-style': 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
