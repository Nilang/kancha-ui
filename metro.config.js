module.exports = {
  projectRoot: `${__dirname}/demo`,
  watchFolders: [__dirname],
  resolver: {
    sourceExts: ['ts', 'tsx', 'js'],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}
