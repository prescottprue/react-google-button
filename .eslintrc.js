module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [ 'standard', 'standard-react', 'prettier', 'prettier/react' ],
  plugins: [ 'babel', 'react', 'prettier' ],
  env: { browser: true },
  settings: {
    react: {
      version: 'detect', 
    }
  },
  rules: {
    semi: [ 2, 'never' ],
    'no-console': 'error',
    'react/jsx-no-bind': [ 2, { allowArrowFunctions: true } ],
    'prettier/prettier': 
    [ 'error', {
      singleQuote: true,
      trailingComma: 'none',
      semi: false,
      bracketSpacing: true,
      jsxBracketSameLine: false,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false
    }]
  }
}