const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const config = {
  resolver: {
    sourceExts: Array.from(
      new Set([
        ...defaultConfig.resolver.sourceExts,
        'ts',
        'tsx',
        'cjs',
        'mjs',
      ]),
    ),
    extraNodeModules: {
      'react-dom': require.resolve('react-native'),
      'react-native-web': require.resolve('react-native'),
    },
    unstable_enablePackageExports: true,
    unstable_conditionNames: ['react-native', 'require', 'default'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
