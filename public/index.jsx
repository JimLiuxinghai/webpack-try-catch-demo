import Test from './test.jsx'

function testA(){
	var test = new Test();
	test.methodA();
	test.methodB();
}

class test11{
	constructor(){
		console.log('this is construcor');
	}

	methodA(){
		console.log('this is methodA');
	}

	methodB(){
		console.log('this is methodB');
	}

}