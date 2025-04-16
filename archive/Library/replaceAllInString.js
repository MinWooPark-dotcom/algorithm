//replace 함수에서와 같이 사용하되, 따옴표를 / 슬래시로 대체하고, 뒤에 gi 를 붙이면 replaceAll() 과 같은 기능을 한다.
// g: global, 발생할 모든 패턴에 대한 전역 검색
// i: 대/소문자 구분 안함

let a = 'abcda';
const resultOfReplace = a.replace('a', '');
const resultOfReplaceAll = a.replace(/a/gi, '');

console.log('resultOfReplace', resultOfReplace); // bcda
console.log('resultOfReplaceAll', resultOfReplaceAll); // bcd
