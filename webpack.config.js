const path = require('path');
const merge = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
} = require('@cerner/terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

console.log(path.resolve(path.join(process.cwd(), 'packages', 'terra-i18n')));

const coreConfig = (env = {}) => {
  const processPath = process.cwd();

  // const i18nAlias = path.resolve(path.join(processPath, 'packages', 'terra-i18n'));
  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({
        // defaultLocale: env.defaultLocale,
      }),
    ],
    // resolve: {
    //   alias: {
    //     'terra-i18n': i18nAlias,
    //   },
    // },
  };
};

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
