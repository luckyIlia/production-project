import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = option;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(option)
        },
        resolve: buildResolvers(option),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ?  buildDevServer(option) : undefined,
    }
}