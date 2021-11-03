module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    '^.+\\.yml$': '<rootDir>/jest-swagger-transformer.js',
  },
  moduleFileExtensions: ["js", "json", "ts", "tsx", "jsx", "node", "yml"]
};
