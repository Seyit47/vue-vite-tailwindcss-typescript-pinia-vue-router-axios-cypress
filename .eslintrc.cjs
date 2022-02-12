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
    amd: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  overrides: [
    {
      files: [
        '**/src/*.spec.{js,ts,jsx,tsx}',
        'cypress/integration/**.spec.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    }
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
