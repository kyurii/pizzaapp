const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.externals) {
        config.externals = {};
    }

    // global app config object
    config.externals.config = JSON.stringify({
        apiUrl: process.env.NODE_ENV === 'production' ? 'https://pizzaappjs.herokuapp.com/api' : 'http://localhost:1234/api'
    })

    return config;
}
