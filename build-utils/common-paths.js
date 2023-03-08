const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname, "../");

module.exports = {
  projectRoot: PROJECT_ROOT,
  buildOutputPath: path.join(PROJECT_ROOT, "build"),
  devOutputPath: path.join(PROJECT_ROOT, "dev"),
  appEntry: path.join(PROJECT_ROOT, "app"),
  chromePath: path.join(PROJECT_ROOT, "chrome"),
  extensionPath: path.join(PROJECT_ROOT, "chrome/extension"),
};
