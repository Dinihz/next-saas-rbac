/** @type {imports('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
