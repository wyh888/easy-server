module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "window": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "script"
  },
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }],
    "semi": ["error", "never"]
  }
};
