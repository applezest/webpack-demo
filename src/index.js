//import {circumference} from "./circle";

var _ = require('lodash'); // require는 nodejs에서 모듈을 가져오라는 명령어. 이것은 es6로 넘어가면서 import로 바뀌어졌다.
// require라는 명령어를 브라우저가 인식을 못한다.
// 그러므로 해당 모듈에서 필요한 부분만 가져오고,  필요한 모듈들이 한개 이상으로 이루어져 있다면 필요한 부분의 파일들만 따로 하나의 모듈로 만들어주는 모듈 번들러 역할을 webpack이 하게 된다.
// npx webpack 명령어를 통해 컴파일 하고 dist/index.html 실행시켜보면 에러나지 않음.


// named import의 규칙은 반드시 {}에 동일한 이름을 사용
import {area, circumference} from './circle';

// default import 규칙 : {} 없이 이름을 바꿀 수 있다.
import aaa from './cube'; //aaa = function cube(x){ return x*x*x}

import './style.css'; // css 가져오기
import './ui.scss'; //scss 가져오기

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

console.log('--------------------------');
console.log(area(5));
console.log(aaa(5));
document.body.appendChild(component());