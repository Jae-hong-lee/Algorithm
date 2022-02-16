// **Array-api Quiz.10;**
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    // .join(separator? : str) :string;
    // console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    // .split(separator:str | RegExp, limit?:nmber) : string[]
    // 구분자, 또는 limit 
    // 0,1 인덱스 부분만 입력받고 싶다. -> limit 를 지정가능.
    // console.log(result);
    // console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    // console.log(result);
    // 순서 거꾸로. , 배열 자체를 변화시키고 result 값도 변환되어 출력됨
  }
  
  // Q4. make new array without the first two elements
  
  {
    const array = [1, 2, 3, 4, 5];
    const NewArray = array.slice(2);
    // slice(start?:number, end?:number) : T[]
    // : 배열에서 특별한 부분을 return 하는 것

    // const NewArr = array.splice(0,2);
    // splice(start: number, deleteCount?: number): T[];
    // : 어디서부터 몇개나 지울것인가(삭제), 배열자체에서 데이터를 삭제.

    // console.log(NewArray);
    // console.log(NewArr);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find(function(student){
          return student.score === 90;
      });
    //   console.log(result);
      // 콜백함수. 불리언으로 구별되며 True 가 나올때까지 반복.
      // arrow 함수로 줄일 수 있음
      const result2 = students.find((student) => student.score === 90);
    //   console.log(result2);
      
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
    //   console.log(result);
      //콜백함수, true 인 애들만 모아서 새로운 배열로 만듬
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      // 학생들을 받아서 학생들이 가지고 있는 점수만 result 에 저장
    //   console.log(result);
      // 배열에 들어있는 요소를 다른것으로 한가지 한가지 변환해주는 것

  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = students.some((student)=> student.score <50);
      // 배열에 요소중 함수가 true 가 되는 것이 있는지 없는지를 확인해준다.
      // 한명이라도 있으면 True

    //   const result = students.every((student)=> student.score <50);
      // 배열에 모든 요소가 함수에 true 이면 true 출력
      // 한명이라도 false 이면 false

    //   console.log(result);
  }
  
  // Q9. compute students' average score (평균)
  {
//       const result = students.reduce((prev,curr)=> {
//           console.log('-----');
//           console.log('prev');
//           console.log('curr');
//           return prev + curr.score;
//       }, 0);
//       console.log(result);
      //동작 방식
      // 콜백과 이니셜 벨류를 전달함. 배열안에 모든 요소들마다 호출됨, 리턴값은 함께 누적된 결과값을 return
      // 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할떄 쓴다.
      

      const result = students.reduce((prev,curr)=> prev + curr.score , 0);
        // console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result2 = students
      .map((student)=> student.score)
    //   .filter((score) => score >= 50) // 점수가 50점 이상인
      .join();
    // console.log(result2);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map((student)=> student.score)
      .sort((a,b)=> a-b)
      // a,b 이전 값과 현재값이 전달되는데 -값을 return하게 되면 첫번째가 두번째보다
    //   작다고 간주 되어져서 정렬이 됨.
    // 높은게 나오게 싶으면 sort((a,b)=> b-a) 로 만들면됨
      .join();
      console.log(result);
  }