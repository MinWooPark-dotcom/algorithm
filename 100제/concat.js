// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// 출력: 2019/04/26 11:34:27

function solution() {
  const year = '2019';
  const month = '04';
  const day = '26';
  const hour = '11';
  const minute = '34';
  const second = '27';  

  const result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second)
  return result
}

console.log(solution())