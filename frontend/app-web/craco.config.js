const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
const absolutePath = path.join(__dirname, '../shared');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extends.json",
        unsafeAllowModulesOutsideOfSrc: true,
        // debug: true
      }
    }
  ],
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      // console.log('webpackConfig', JSON.stringify(webpackConfig));
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        // match.loader.include = undefined; // TODO: Weird, we do not need to set paths, just set it undefined and it works properly
        // console.log('match.loader', match.loader.options.presets)
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat([absolutePath]);
      }
      return webpackConfig;
    },
  },
};
