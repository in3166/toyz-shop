const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  rootDir: './',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['\\**\\*.{js,jsx,ts,tsx}', '!\\**\\*.d.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/stores/(.*)$': '<rootDir>/stores/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    'react-i18next': '<rootDir>/src/__tests_/react-i18next.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
}

module.exports = createJestConfig(customJestConfig)
