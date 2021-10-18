const HtmlPlugin = require("html-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] 
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [CssPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
            },
            
        ]
    },

    plugins: [
        new HtmlPlugin({
            filename:"index.html",
            template:"./public/index.html",
            manifest:"./public/manifest.json"
        }),
        new CssPlugin()
    ],

    devServer: {
        historyApiFallback: true
    }
}