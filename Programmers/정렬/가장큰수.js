function solution(numbers) {
  let get_num = numbers.map((c) => String(c));
  get_num = get_num.sort((a, b) => b + a - (a + b)).join("");

  return get_num[0] == "0" ? "0" : get_num;
}
console.log(solution([6, 10, 2]));

let a = [3, 2, 5].sort((a, b) => a - b);
//앞에꺼(a) - 뒤에꺼(b) 각각 비교해서, 음수면 b가 더 크기 때문에 a가 더 앞에 있어야함.
//양수라면 a가 더 크기 떄문에 b가 더 앞에 있어야함
//0이라면 순서를 바꾸지 않음.

//이걸 a(앞에), b(뒤에)매개변수로 표현했다.
//따라서 내림차순 정렬이 하고싶다면

//b-a로 바꿔주면 된다.

//그렇다면,
//문자열 a + b 와 b + a 를 비교해 오름차순 정렬하고 싶다면
//다음과 같이 코드를 작성하면 된다.
//arr.sort((a, b)=>(b+a) - (a+b))
console.log(a);
