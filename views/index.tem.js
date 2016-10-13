/**
 * Created by Administrator on 2016/10/12.
 */
'use strict';

let {$include, $setTemplate, $forEach} = require('./core/api.js'),
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
        return {
            name: '123',
            arr: [1, 2, 3, 4]
        }
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

<!DOCTYPE html>
<html lang="ch-zn">
<head>
    ${$include('./../public/meta.tem.js')}
    <title>喵鱼API手册-首页</title>
</head>
<body>
    <div class="view">
        ${data.name}
        ${$forEach(data.arr, (item) => `<span>内容${item}</span>`)}
    </div>
    <div>11111111</div>
    <script type="text/javascript" src="js/lib/angular.min.js"></script>
    <script type="text/javascript" src="js/lib/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="js/lib/angular-animate.min.js"></script>
    <script type="text/javascript" src="js/lib/angular-messages.min.js"></script>
    <script type="text/javascript" src="js/lib/angular-sanitize.min.js"></script>
    <script type="text/javascript" src="js/lib/bindonce.min.js"></script>
</body>
</html>

`);

// 导入模块数据
Object.assign(exports, vc);