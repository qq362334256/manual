/**
 * Created by Administrator on 2016/10/13.
 */
'use strict';

let api = {
    /**
     * 设置模板
     * 参数：
     *     template(string) - 字符串拼接模板
     * 返回值：
     *     template(string) - 返回字符串拼接模板
     */
    $setTemplate(template = '') {
        return template.trim();
    },

    /**
     * 包含指定路径模板
     * 参数：
     *     src(string) - 模板的url路径
     * 返回值：
     *     template(string) - 返回字符串拼接模板
     */
    $include(url) {
        let {$controller, $view} = require(url);

        return $view($controller());
    },

    /**
     * 循环数组返回指定拼接模板
     * 参数：
     *     arr(array) - 遍历数组
     *     callback(function) - 每次遍历的回调方法
     * 返回值：
     *     template(string) - 返回字符串拼接模板
     */
    $forEach(arr, callback) {
        return arr.map((item) => callback(item)).join('');
    }
}

// 导入模块数据
Object.assign(exports, api);