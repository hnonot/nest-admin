import antfu from '@antfu/eslint-config'

export default antfu(
  {
    lessOpinionated: true,
    formatters: true,
    vue: true,
    typescript: true,
    unocss: true,
    ignores: [],
  },
  {
    rules: {
      'no-var': 'error', // 禁用 var
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }],
      'no-const-assign': 'error', // 禁止重新赋值 const
      'eqeqeq': ['error', 'always'], // 强制使用 ===
      'no-console': 'warn', // 所有 console 语句标为警告
      'no-dupe-keys': 'error', // 禁止对象字面量重复键
      'no-duplicate-imports': 'error', // 禁止重复导入
      'no-import-assign': 'error', // 禁止给导入绑定赋值
      'curly': ['error', 'all'], // 所有控制语句必须使用大括号
      'semi': ['error', 'always'], // 行尾必须使用分号

      // 未使用导入/变量提示
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      // Vue 文件块顺序：template > script > style
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],

      // Prettier 格式化规则
      'prettier/prettier': ['warn', {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
      }],

      // JSDoc 支持
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/convert-to-jsdoc-comments': ['warn'],

      // 兼容性关闭规则
      'n/prefer-global/process': 'off',
      'vue/first-attribute-linebreak': 'off',
      'ts/no-unused-expressions': 'off',
    },
  },
).override('antfu/regexp/rules', () => ({}))
