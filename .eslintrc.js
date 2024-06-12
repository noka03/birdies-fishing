module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2018
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unreachable': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-empty': 'off'
    },
    globals: {
        Zutak: 'readonly'
    }
}
