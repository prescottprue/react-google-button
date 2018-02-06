module.exports = {
  presets: [
    ['env', {
      modules: process.env.BABEL_ENV === 'es'
        ? false
        : 'commonjs'
    }],
    'react'
  ],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    'transform-export-extensions',
    'transform-object-assign'
  ],
  env: {
    test: {
      sourceMaps: 'both'
    }
  }
}
