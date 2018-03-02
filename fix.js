/**
 * Stuff that needs to be eslint --fix'd after a prettier run as
 */
module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'mocha', 'flowtype', 'react'],
  rules: {
    'arrow-parens': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    'react/jsx-space-before-closing': [2, 'always'],
  },
}
