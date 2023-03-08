require("shelljs/global");

exports.copyAssets = (env) => {
  const type = env === "dev" ? env : "build";
  rm("-rf", type);
  mkdir(type);
  cp(`chrome/manifest.${env}.json`, `${type}/manifest.json`);
  cp("-R", "chrome/assets/*", type);
  cp("-R", "chrome/views/*", type);
};
