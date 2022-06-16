module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 0,
            browsers: 'last 2 versions'
        }),
        require('postcss-import'),
        require('postcss-nested'),
        // require('postcss-url'),
        // require('autoprefixer'),
    ],
};