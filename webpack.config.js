const { commonConfig, buildValidations, tasks } = require("./build-utils");
const webpackMerge = require("webpack-merge");
const { ProvidePlugin } = require("webpack");

module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);
  tasks.copyAssets(env.env);
  return mergedConfig;
};
