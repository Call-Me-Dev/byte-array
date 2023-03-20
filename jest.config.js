module.exports = {
  collectCoverageFrom: ["**/*.ts"],
  testPathIgnorePatterns : [
    "/node_modules/",
    "/.dist/"
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
