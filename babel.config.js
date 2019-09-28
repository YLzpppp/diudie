module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins : [
      "import-graphql",
      "babel-plugin-root-import"
    ]
  }
};
