let webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",

    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}