/*
 * 函数作为参数传递
 */

// style-1
function say(msg) {
	console.log(msg);
}

function execute(func, param) {
	func(param);
}

execute(say, 'something by style-1');

// style-2
// 能不能在定义的时候也一并定义作为参数的函数，虽然没什么意义
// 测试之后，失败
/*function exec(function(word) {
	console.log(word);
});*/
execute(function (word) {
	console.log(word);
}, 'something by style-2');
