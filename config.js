/**
 * Created by Administrator on 2016/10/13.
 */
'use strict';

let express = require('express'),
    bodyparser = require('body-parser'),
    compression = require('compression');

// 挂在模块
exports.setConfig = function(app) {
    // 配置静态文件路径
    app.use(express.static(`${__dirname}/static`));

    // 配置参数parse中间件
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());

    // 配置压缩中间件
    app.use(compression());

    // 配置header中间件
    //app.use(function(req, res, next) {
    //    // 跨域
    //    res.append('Access-Control-Allow-Origin', '*');
    //
    //    next();
    //});
};