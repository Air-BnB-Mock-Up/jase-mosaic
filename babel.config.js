module.exports = {
  mode: 'production',
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ["@babel/plugin-syntax-jsx"]
};

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
