{
  "extends": ["wesbos"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src", "src/container", "src/assets"]
      }
    }
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "tabWidth": 2
      }
    ],
    "import/no-extraneous-dependencies": off,
    "import/named": off,
    "react/prop-types": [
      "error",
      {
        "ignore": ["navigation", "screenProps"]
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ]
  }

}
