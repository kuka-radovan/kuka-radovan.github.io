module.exports = {
  plugins: {
    'cssnano': {
      preset: 'default'
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%']
    }
  }
}
