module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',

      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@components': './components',
            '@providers': './providers',
            '@utils': './utils',
            '@shared': './shared',
            '@styles': './styles',
            '@hooks': './hooks',
          },
        },
      ],
    ],
  };
};
