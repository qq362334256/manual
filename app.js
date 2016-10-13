/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

/**
 * web启动项目
 */
let express = require('express'),
	{setRouter} = require('./router.js'),
	{setConfig} = require('./config.js'),
    app = express();

// 设置配置
setConfig(app);

// 设置路由
setRouter(app);

// 配置端口号
app.listen(5001, '127.0.0.1', () => console.log('project启动成功！端口号为:5001'));