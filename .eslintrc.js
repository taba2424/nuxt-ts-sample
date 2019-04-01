module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'no-console': 'off'
  }
}
