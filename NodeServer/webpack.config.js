const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
/*    output: {
        filename: 'bundle.js',
        path: './dist'
    },*/
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};