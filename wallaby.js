module.exports = function (wallaby) {

    return {
        files: [
            '**/*.ts',
            '!**/src/**/*.spec.ts',
            '!**/node_modules/**/*.ts',
            '!node_modules/**/*.ts',
            '**/*.json'
        ],
        tests: [
            'src/**/*.spec.ts',
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest',
        preprocessors: {
            '**/*.js?(x)': file => require('babel-core').transform(
                file.content,
                {sourceMap: true, filename: file.path, presets: ['babel-preset-jest']})
        }

    };
};
