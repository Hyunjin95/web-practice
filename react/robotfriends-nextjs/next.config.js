const production = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: production ? 'https://hyunjin95.github.io/web-practice' : '',
};
