import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // <-- opcional, si usas alias como @/components
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // <-- opcional
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
