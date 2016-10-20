/**
 * Created by Administrator on 2016/10/18 0018.
 */
'use strict';

let path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    webpackInitConfig, serverTask;

/**
 * 获取webpack初始化配置
 * 参数：
 *      [plugins](array) - 需要进行解析操作的插件数组，默认为：1、开启代码压缩及混淆编译
 *      [watch](boolean) - 是否需要开启文件监听改变，默认为：false
 *      [cache](boolean) - 是否开启缓存功能，默认为：fasle
 * 返回值：
 *      object - 返回webpack的配置对象
 */
webpackInitConfig = (plugins = [
    new webpack.optimize.CommonsChunkPlugin('common', 'js/[name].bundle.js')
], watch = false, cache = false) => ({
    context: __dirname,
    entry: {
        'common': './src/common/common.module.js',
        'index': './src/index/index.module.js'
    },
    output: {
        path: './static',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style!css!postcss!less' },
            { test: /\.(svg|ttf|eot|woff|woff2)$/, loader: 'file-loader?name=font/[name].[ext]' },
            { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=10240&name=images/[name].[ext]' }
        ]
    },
    plugins: plugins,
    postcss: [autoprefixer()],
    resolve: {
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    },
    watch: watch,
    cache: cache
});

/**
 * 启动server服务任务
 * 参数：
 *      callback(function) - 回调函数
 * 返回值：
 *      -
 */
serverTask = (callback) => {
    require('./app.js');

    callback();
};

/**
 * gulp dev测试任务环境
 * 命令：
 *      gulp dev
 * 备注：
 *      1、开启webpack的自动打包任务集；2、开启了5001端口的测试服务环境
 */
gulp.task('dev', () => {
    webpack(webpackInitConfig([], true, true), (err, stats) => {
        if (err) {
            // webpack压缩失败报错
            throw new gutil.PluginError('webpack - error', err);
        } else {
            // webpack压缩成功提示
            gutil.log('[webpack - success]', stats.toString({ colors: true }));

            // 启动server任务
            serverTask(() => {
                gutil.log('----- dev测试服务环境开启 -----');
            });
        };
    });
});

/**
 * gulp pro生产打包任务
 * 命令：
 *      gulp pro
 * 备注：
 *      1、开启webpack的自动打包任务集
 */
gulp.task('pro', () => {
    webpack(webpackInitConfig([
        new webpack.optimize.CommonsChunkPlugin('common', 'js/[name].bundle.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]), (err, stats) => {
        if (err) {
            // webpack压缩失败报错
            throw new gutil.PluginError('webpack - error', err);
        } else {
            // webpack压缩成功提示
            gutil.log('[webpack - success]', stats.toString({ colors: true }));
            gutil.log('----- 生产包压缩完成 -----');
        };
    });
});