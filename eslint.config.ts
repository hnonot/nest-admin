import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import css from "@eslint/css";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginPrettier from "eslint-plugin-prettier";
import pluginJsdoc from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS/TS/Vue 基础规则
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: {
      js,
      "unused-imports": pluginUnusedImports,
      prettier: pluginPrettier,
      jsdoc: pluginJsdoc,
    },
    extends: ["js/recommended"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 通用 JS/TS 规则
      "no-var": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],
      "no-const-assign": "error",
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "no-dupe-keys": "error",
      "no-duplicate-imports": "error",
      "no-import-assign": "error",
      curly: ["error", "all"],
      semi: ["error", "always"],

      // 未使用导入/变量
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      // Prettier 格式化
      "prettier/prettier": [
        "warn",
        {
          semi: true,
          printWidth: 100,
          trailingComma: "es5",
          bracketSpacing: true,
          arrowParens: "avoid",
        },
      ],

      // JSDoc 支持
      "jsdoc/require-jsdoc": "off",
      "jsdoc/check-tag-names": "warn",
      "jsdoc/convert-to-jsdoc-comments": ["warn"],

      // 兼容性关闭规则
      "n/prefer-global/process": "off",
      "vue/first-attribute-linebreak": "off",
      "ts/no-unused-expressions": "off",
    },
  },

  // TypeScript 推荐规则
  tseslint.configs.recommended,

  // Vue 基础规则
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "style"],
        },
      ],
    },
  },

  // JSON 文件支持
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  // CSS 文件支持
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
