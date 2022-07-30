// 다음 코드의 출력 값으로 알맞은 것은?

function solution() {
  var a = 10;
  var b = 2;
  
  for(var i=1; i<5; i+=2){
      console.log('i', i) // 1, 3
      a += i;
  }
  
  // a = 14, b = 2 
  console.log(a+b); // 16
}  


console.log(solution())