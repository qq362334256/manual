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

    <script type="text/javascript" src="#"></script>

`);

// 导入模块数据
Object.assign(exports, vc);