/*
 * ������Ϊ��������
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
// �ܲ����ڶ����ʱ��Ҳһ��������Ϊ�����ĺ�������Ȼûʲô����
// ����֮��ʧ��
/*function exec(function(word) {
	console.log(word);
});*/
execute(function (word) {
	console.log(word);
}, 'something by style-2');
