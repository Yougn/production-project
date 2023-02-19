import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSloaders } from './loaders/buildCSSLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCSSloaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
