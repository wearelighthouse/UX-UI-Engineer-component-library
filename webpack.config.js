const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-nesting",
										{
											implementation: require("postcss"),
                                            ident: 'postcss',
                                            plugins: () => [
                                                require('postcss-nested'),
                                                require('postcss-preset-env')({
                                                    autoprefixer: {
                                                    flexbox: 'no-2009',
                                                    },
                                                    stage: 3,
                                                }),
                                            ],
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
};
