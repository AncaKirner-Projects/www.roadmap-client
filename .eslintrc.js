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
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-redux/recommended"
    ],
    "plugins": [
        "import",
        "react",
        "react-redux"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "no-var": 2,
        "prefer-const": 2,
        "react/display-name": 0,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/jsx-boolean-value": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "jsx-quotes": [2, "prefer-double"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
        "react/jsx-no-undef": 2,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        "react/jsx-sort-props": 0,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-sort-prop-types": 0,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
        "react/jsx-uses-react": 2,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-vars": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/no-did-mount-set-state": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-update-set-state": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-multi-comp": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-unknown-property": 2,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/prop-types": 2,           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/react-in-jsx-scope": 2,   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/self-closing-comp": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        // "react/wrap-multilines": 2,      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
        "react/sort-comp": [2, {         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
            "order": [
                "displayName",
                "propTypes",
                "contextTypes",
                "childContextTypes",
                "mixins",
                "statics",
                "defaultProps",
                "/^_(?!(on|get|render))/",
                "constructor",
                "getDefaultProps",
                "getInitialState",
                "state",
                "getChildContext",
                "componentWillMount",
                "componentDidMount",
                "componentWillReceiveProps",
                "shouldComponentUpdate",
                "componentWillUpdate",
                "componentDidUpdate",
                "componentWillUnmount",
                "/^_?on.+$/",
                "/^_?get.+$/",
                "/^_?render.+$/",
                "render"
            ]
        }]
    }
};