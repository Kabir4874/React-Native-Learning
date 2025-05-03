const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // Your custom config here (if any)
};

module.exports = withNativeWind(
  wrapWithReanimatedMetroConfig(
    mergeConfig(getDefaultConfig(__dirname), config),
  ),
  {
    input: './global.css',
  },
);
