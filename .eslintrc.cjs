/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:tailwindcss/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    browser: true,
    module: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.spec.{js,ts,jsx,tsx}',
        'cypress/integration/**.spec.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    }
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
