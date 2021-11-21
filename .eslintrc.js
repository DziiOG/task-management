module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
  }],
    "spaced-comment": [
      "error",
      "always",
      {
        "exceptions": [
          "-",
          "+"
        ]
      }
    ],
    "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "tabWidth": 2,
        "printWidth": 100,
        "semi": false,
        "arrowParens": "avoid",
        "spacedComment": false,
        "endOfLine": "auto"
      }
    ],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  },
};
