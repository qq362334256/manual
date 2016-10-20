/**
 * Created by Administrator on 2016/10/9.
 */
'use strict';

// 路由配置块
let viewTem = require('./views/core/core.js');

// 挂在模块
exports.setRouter = function(app) {
    // 首页通用路由
    app.get('/index', (req, res) => res.send(viewTem.getTemplate(req.url)));
    //app.get('*', (req, res) => res.send(viewTem.getTemplate('/index')));

    // 跳首页
    app.get('/', (req, res) => res.send(viewTem.getTemplate(req.url)));
};