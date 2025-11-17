import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import spellcheck from 'eslint-plugin-spellcheck'

const eslintConfig = [
  {
    ignores: ['node_modules/**', 'amplify/**', '.next/**']
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: await import('eslint-plugin-import').then(m => m.default || m),
      spellcheck,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'spellcheck/spell-checker': 'off',
      'import/no-anonymous-default-export': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      import: await import('eslint-plugin-import').then(m => m.default || m),
      spellcheck,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'spellcheck/spell-checker': 'off',
      'import/no-anonymous-default-export': 'warn',
    },
  },
]

export default eslintConfig


