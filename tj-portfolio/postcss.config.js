const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [postcssNesting, require('tailwindcss'), require('autoprefixer')],
};
