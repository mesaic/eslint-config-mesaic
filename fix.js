/**
 * Stuff that needs to be eslint --fix'd after a prettier run as
 */
module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'mocha', 'flowtype'],
  rules: {
    'arrow-parens': [2, 'always'],
    'jsx-quotes': [2, 'prefer-single'],
  },
}
