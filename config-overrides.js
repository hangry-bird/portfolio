const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
} = require("customize-cra");
const path = require("path");



module.exports = {
    webpack: function (config, env) {
        console.log(config.resolve.alias)
        config.resolve.alias ={
            '@src': path.resolve(__dirname, 'src') // 경로 alias 설정
        }
        console.log(config.resolve.alias)
        return config;
    }
}  