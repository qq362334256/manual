/**
 * Created by Administrator on 2016/10/12.
 */
'use strict';

// 视图模板对象
let viewTem = {
    /**
     * 获取模板
     */
    getTemplate(url) {
        let {$controller, $view} = require(`./../${url.substring(1)}.tem.js`);

        return $view($controller());
    }
}

// 导入模块数据
Object.assign(exports, viewTem);