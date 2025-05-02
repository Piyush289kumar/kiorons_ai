module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    'react/jsx-key': 'error',
  },
  settings: {
    next: {
      rootDir: './src',
    },
  },
}