/**
 * Version that does not lint against stylistic issues fixable by prettier
 */
module.exports = {
  extends: ['./index.js', 'prettier', 'prettier/react', 'prettier/flowtype'],
}
