module.exports = {
    mode: 'development',
    entry: {
        bundle: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};
