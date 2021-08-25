// See jest docs for config options: https://jestjs.io/docs/en/configuration
module.exports = {
  // testEnvironment: "jsdom",
  clearMocks: true,
  restoreMocks: true,
  verbose: true,
  testURL: "http://localhost:8080",
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: [
    "test/.*\\.test.[jt]sx?$",
  ],
  // moduleNameMapper: {
  //   // === @app
  //   "^@app/(.*)$": "<rootDir>/src/$1",
  //   // === @test
  //   "^@test/(.*)$": "<rootDir>/test/$1",
  // },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
  ],
};
