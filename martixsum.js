// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
// 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬 arr1과 arr2를 입력받아, 
// 행렬 덧셈의 결과를 반환하는 함수, 
// solution을 완성해주세요.

// 이중 for문을 통해 행과 열을 더한다.
function solution(arr1, arr2) {
    var answer = arr1;
    for (i=0;i<arr1.length;i++){
        for (j=0;j<arr1[i].length;j++){
            arr1[i][j] += arr2[i][j]
        }
    }
    return answer;
}

console.log(solution([[1],[2]],[[3],[4]])) ;// result = [[4],[6]]