function solution(price, money, count) {
    // let accumulatedfee = price; // 3, 6, 9, 12
    let accumulatedfee = 0;
    // let retainedMoney = money; // 20, 17, 11, 2
    for (let i = 1; i <= count; i++) {
            accumulatedfee = accumulatedfee + price * i; // n번 째 이용료
        }
    if (accumulatedfee <= money) {
        return 0;
    } else {
        return accumulatedfee - money;
    }
}

const result = solution(3, 20, 4);
console.log('result', result) // undefined

/**
 input
 price	money	count
 3	20	4

 output
 result
 10
 **/