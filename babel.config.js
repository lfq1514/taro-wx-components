/* eslint-disable import/no-commonjs */
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
    ['@babel/preset-react', { targets: { node: 'current' } }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'Nerv.createElement',
      },
    ],
    ['@babel/plugin-proposal-object-rest-spread'],
  ],
};
