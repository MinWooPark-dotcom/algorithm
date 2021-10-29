function solution(lottos, win_nums) {
    // 방법 1. 이중 for문으로 두 배열을 비교
    let countZero = 0;
    let numOfWinners = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            countZero++;
        }
        for (let k = 0; k < win_nums.length; k++) {
            if (lottos[i] === win_nums[k]) {
                numOfWinners++;
            }
        }
    }
    const minimum = checkRanking(numOfWinners);
    const maximum = checkRanking(numOfWinners + countZero);
    return [maximum, minimum];
}

// 당첨 갯수 당첨 순위로 변경하는 함수
function checkRanking(numOfWinners) {
    if (numOfWinners === 6) {
        return 1;
    } else if (numOfWinners === 5) {
        return 2;
    } else if (numOfWinners === 4) {
        return 3;
    } else if (numOfWinners === 3) {
        return 4;
    } else if (numOfWinners === 2) {
        return 5;
    } else {
        return 6;
    }
}