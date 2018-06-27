const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        app: ['babel-polyfill','./src/store.js']
    },
    output:{
        path: path.resolve(__dirname , 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env" , 'stage-0']
                    }
                }
            }
        ]
    }
};