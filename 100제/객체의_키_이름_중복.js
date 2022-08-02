// 자바스크립트 객체를 다음과 같이 만들었다. 
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

// var d = {
//     'height':180,
//     'weight':78,
//     'weight':84,
//     'temperature':36,
//     'eyesight':1
// };

// console.log(d['weight']);

function solution() {
  const d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
  };
  return d['weight']
}

console.log(solution()) // 84
