module.exports = {
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    'react/require-default-props': 0,
    'react/jsx-fragments': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    // react 相关的配置
    'react/no-multi-comp': [
      'warn',
      {
        ignoreStateless: true
      }
    ],
    // 允许 for...of 的用法 https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
