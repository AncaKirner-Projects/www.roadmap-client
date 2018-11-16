module.exports = {
    "ecmaFeatures": {
        "modules": true,
        "spread": true,
        "restParams": true
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "plugin:jest/recommended"
    ],
    "parser": "babel-eslint",
    "plugins": ["jest"],
    "rules": {
        "func-names": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "comma-dangle": ["error", "never"],
        "react/destructuring-assignment": ["<enabled>", 'never'],
        "react/prop-types": 0,
        "react/forbid-prop-types": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};