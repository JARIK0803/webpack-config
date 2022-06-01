const plugins = [];

if (process.env.NODE_ENV?.trim() !== 'production') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: plugins,
};
