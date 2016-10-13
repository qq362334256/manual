/**
 * Created by Administrator on 2016/10/12.
 */
'use strict';

let {$setTemplate} = require('./../core/api.js'),
    vc, getTemplate;

// vc对象
vc = {
    /**
     * 控制器
     * 参数：
     *     -
     * 返回值：
     *     data(object) - $view视图需要的数据对象
     */
    $controller() {
        return '';
    },

    /**
     * 视图
     * 参数：
     *     data(object) - $controller控制器返回的数据对象
     * 返回值：
     *     template(string) - 返回字符串拼接模板
     */
    $view(data) {
        return getTemplate(data);
    }
};

// html模板
getTemplate = (data) => $setTemplate(`

    <meta charset="UTF-8">
    <meta http-equiv="Page-Enter" contect="revealTrans(duration=1.0,transtion=12)">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no,email=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

`);

// 导入模块数据
Object.assign(exports, vc);