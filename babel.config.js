module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@styles': './src/styles',
          '@themes': './src/themes',
          '@Screen': './src/Screen',
          '@routers': './src/routers',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
