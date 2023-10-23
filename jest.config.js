const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config = createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
});

module.exports = config