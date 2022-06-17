module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}
// webpackFinal: async config => {
//   config.module.rules.push({
//    test: /\.scss$/,
//     use: [
//       'style-loader',
//       'css-loader',
//       {
//         loader: 'postcss-loader',
//         options: {
//           ident: 'postcss',
//           plugins: [require('postcss-import')],
//         },
//       },
//     ],
//     include: __dirname,
//   });
//   config.resolve.modules.push(process.cwd() + '/node_modules');
//   config.resolve.modules.push(process.cwd() + '/src');
//   config.resolve.symlinks = false;
  
//   return config.resolve;
// },
