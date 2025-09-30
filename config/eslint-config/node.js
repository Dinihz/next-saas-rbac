/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
