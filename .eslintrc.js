module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        // 这里是添加的代码
        {
            // 匹配views和二级目录中的index.vue，匹配components和二级目录中的所有vue
            files: ['src/views/Index.vue','src/views/**/Index.vue','src/components/*.vue','src/components/**/*.vue'],
            // 给上面匹配的文件指定规则
            rules: {
                'vue/multi-word-component-names':"off",
            }
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};