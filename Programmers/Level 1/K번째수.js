function solution(array, commands) {
    var answer = [];
    commands.forEach((item) => {
        sliceArray = array.slice(item[0] - 1, item[1]);
        sliceArray.sort((a, b) => a - b);
        answer.push(sliceArray[item[2] - 1]);
    })
    return answer;
}