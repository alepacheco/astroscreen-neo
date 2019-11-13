const withSass = require('@zeit/next-sass');

const config = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      }
};

module.exports = withSass(config);