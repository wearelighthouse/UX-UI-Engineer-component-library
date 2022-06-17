module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 3,
            features: {
                'nesting-rules': true
            },
            preserve: false
        }),
        require('postcss-nested'),
        require('autoprefixer'),
        // require('postcss-import'),
        // require('postcss-preset-env')({
        //     stage: 0,
        //     browsers: 'last 2 versions'
        // }),
        // require('postcss-url'),
    ],
};