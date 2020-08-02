const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Common: path.resolve(__dirname, 'src/common/')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: "babel-loader"
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "index.html",
            files: {
                js: ['bundle.js']
            }
        })
    ],
    devServer: {
        open: true,
        port: 3000,
        stats: 'errors-only',
        historyApiFallback: true,
        openPage: '',
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    },
    devtool: 'source-map'
};
