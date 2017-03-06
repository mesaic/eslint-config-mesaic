/* eslint-disable quote-props,no-var,flowtype/require-valid-file-annotation */
const path = require('path');

var reactSortCompConfig = {
  order: [
    'type-annotations',
    'lifecycle',
    'render',
    '/^_render.+$/',
    '/^_handle.+$/',
    'everything-else',
  ],
  'groups': {
    'lifecycle': [
      'displayName',
      'props',
      'propTypes',
      'state',
      'defaultProps',
      'state',
      'context',
      'contextTypes',
      'childContextTypes',
      'getChildContext',
      'onEnter',
      'onChange',
      'fromStores',
      'constructor',
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
    ],
  },
};

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'mocha', 'flowtype'],
  extends: 'airbnb',
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': [2, 'always'],
    'babel/object-curly-spacing': 2,
    'object-shorthand': 2,
    'block-scoped-var': 0,
    'id-length': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'max-len': 0,
    'new-cap': 0,
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-dupe-keys': 2,
    'no-duplicate-imports': 0, // annoying with with `import type`
    'no-else-return': 0,
    'no-multi-spaces': 2,
    'no-nested-ternary': 0,
    'no-param-reassign': ['error', {props: false}],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,

    'jsx-a11y/no-static-element-interactions': 0,

    // temporary disable until https://github.com/Intellicode/eslint-plugin-react-native/issues/22 lands
    // putting Stylesheets at the bottom is best practice in react native, so there should be an exception for this case
    'no-use-before-define': 0,
    'no-prototype-builtins': 0,

    'object-curly-spacing': 0,
    'one-var': 0,
    'prefer-arrow-callback': 2,
    'prefer-template': 0,
    'quotes': ['error', 'single', 'avoid-escape'],
    'require-yield': 0, // false positives
    'jsx-a11y/anchor-has-content': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-children-prop': 0,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-prop-types': 0, // false positives
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-bracket-location': [2, {selfClosing: 'after-props', nonEmpty: 'after-props'}],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 0,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/sort-comp': [2, reactSortCompConfig],
    'react/wrap-multilines': 0,
    'react/jsx-no-bind': 0,
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': 0,
    'vars-on-top': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0, // has false positives
    'import/no-named-as-default': 0, // has false positives
    'import/no-extraneous-dependencies': 0,
    'import/order': [2, {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      // 'newlines-between': 'always',
    }],
    'import/imports-first': 2,
    'import/no-duplicates': 2,
    'import/no-unresolved': [2, {
      ignore: [
        // this would warn for react-native imports in packages/, as the package is only used in partner/ right now
        'react-native',
      ],
    }],

    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',

    'flowtype/define-flow-type': 2,
    'flowtype/require-parameter-type': [2, {excludeArrowFunctions: 'expressionsOnly'}],
    'flowtype/require-return-type': [2, 'always', {excludeArrowFunctions: 'expressionsOnly', annotateUndefined: 'always'}],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^T([A-Z][a-z0-9]*)+$'],
    'flowtype/use-flow-type': 2,
    'flowtype/valid-syntax': 2,

    // has bug, disable for now
    'generator-star-spacing': 0,
  },
  settings: {
    'flowtype': {
      onlyFilesWithFlowAnnotation: false,
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.native.js',
          '.client.js',
          '.server.js',
          '',
          '.less',
          '.less.module',
          '.css',
          '.svg',
        ],
        moduleDirectory: [
          'node_modules',
          'packages',
        ],
        paths: [
          // Only allow absolute from repo root
          path.resolve(__dirname, '../../'),
        ],
      },
    },
  },
  globals: {
    'after': false,
    'afterEach': false,
    'assert': false,
    'before': false,
    'beforeEach': false,
    'describe': false,
    'expect': false,
    'fbq': false, // facebook pixel
    'ga': false, // google analytics
    'it': false,
    'window': false,
    'navigator': false,
  },
};
