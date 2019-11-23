module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": 52,
          "browsers": [
            "last 2 versions",
            "safari >= 7"
          ]
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-class-properties"
  ],
  env: {
    test: {
      sourceMaps: 'both'
    }
  }
}
