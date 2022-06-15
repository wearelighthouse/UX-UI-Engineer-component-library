module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-nested'),
        require('autoprefixer'),
    ],
};