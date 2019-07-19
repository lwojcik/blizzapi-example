module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/**.js",
    "!**/tests/**.{js,ts}",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  automock: false,
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100
  //   }
  // },
};