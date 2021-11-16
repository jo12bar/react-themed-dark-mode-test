const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const cracoPluingScopedCSS = require('craco-plugin-scoped-css');

module.exports = {
    plugins: [
        { plugin: cracoPluingScopedCSS }
    ]
};