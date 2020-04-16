let path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: ['file-loader', 'image-webpack-loader']
            },
            // {
            //     test: /\.json$/,
            //     loader: 'json-loader'
            // }
        ]
    },
};
