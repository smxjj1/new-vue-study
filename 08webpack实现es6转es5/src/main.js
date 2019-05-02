// 1.0 获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

// 2.0 导入site.css文件
// require('../statics/css/site.css');
// require('../statics/mui/css/icons-extra.css');
// // 3.0 导入site1.scss文件
// require('../statics/css/site1.scss');

// // 4.0 导入site2.less文件
// require('../statics/css/site2.less');

import '../statics/css/site.css';

// 调用add方法
// var add = require('./calc.js');  // es5语法
import addObj from './calc.js';  // es6语法

bt.onclick=function(){

	// 2.0 获取calc.js中的add方法并且调用计算结果
	var v1value = parseFloat(v1.value);
	var v2value = parseFloat(v2.value);

	res.value = addObj.add(v1value,v2value);
}
