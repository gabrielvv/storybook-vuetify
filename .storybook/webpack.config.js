const path = require('path');

module.exports = async ({ config }) => {
  const { rules } = config.module;

  rules.push({
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          prependData: "@import '@/styles/variables.scss'",
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
        },
      },
    ],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src')
  }

  return config;
};
