var plugins = [
    require('postcss-import')(),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-preset-env')({
      stage: 0
    }),
]

if(process.env.NODE_ENV == 'production') {
  plugins.push(require('cssnano')({
    preset: 'default',
  }))
}

module.exports = {
    plugins: plugins
}
