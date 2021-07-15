//const { join, resolve } = require('path');
const { VueLoaderPlugin } = require("vue-loader");

//const nodePath = join(__dirname, '..', 'node_modules');
module.exports = (env) => {
    env.config.module.rules.forEach((rule) => {
        if ('foobar.vue'.match(rule.test)) {
            const newTest = rule.test.source.replace('|vue', '');
            rule.test = new RegExp(newTest);
        }
    });

    env.config.module.rules.unshift({
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
            hotReload: false,
            optimizeSSR: false
        }
    });

    env.config.plugins.unshift(new VueLoaderPlugin);

    return {};
}
