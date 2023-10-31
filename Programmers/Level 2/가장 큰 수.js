function solution(numbers) {
    var answer = '';
    let strNumbers = [];
    numbers.forEach((number) => {
        strNumbers.push(number.toString());
    })
    // 두 수를 이어붙였을 때 더 큰 수가 되도록 두 수의 순서 결정
    strNumbers.sort((a, b) => {
        return parseInt(b + a) - parseInt(a + b);
    })
    strNumbers.forEach((number) => {
        answer += number;
    })
    // 문자열이 0으로만 이루어진 경우 예외처리
    answer = parseInt(answer) === 0 ? '0' : answer;
    return answer;
}