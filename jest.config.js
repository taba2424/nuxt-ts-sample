module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/app/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/components/**/*.vue',
    '<rootDir>/app/pages/**/*.vue'
  ]
}
