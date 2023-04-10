//객체가 너무 큰데, 쉽게 조회할 수 있을까?
//생성자함수로부터 찍혀져 나온 객체 즉 인스턴스라는 것까지
//개념이 확장된 부분에서 마주치는 난감함은 객체의 크기와 항목이 
//너무 많을 때 이것을 모두 항목을 매번 찾아서 확인하는 일련의 과정이 한계가 
//있다는 점입니다.

//이럴때 매우 유용하게 활용할 수 있도록, 자바스크립트는 마치 배열 메서드의 편리함처럼 객체 메서드도 다량으로 지원합니다.
//그 중 한가지가 바로 .hasOwnProprty() 라는 메서드로 이름 자체가 매우 직관적인 것을
//확인 하실 수 있습니다.

//본 예제는 가독성을 위해 작은 객체를 조회하는 것으로 학습 예제를 구성했지만, 객체가 너무나 거대해
//모두 조회하기 어려울 때 그 진가가 발휘됩니다. '조회'할 수 있다는 이야기는 반대로 값을 꺼내서
//사용할 수도 있기 때문에 상당히 재치있게 로직을 사용하는 사례가 많습니다.

//자바스크립트 언어 자체가 객체로 만들어져 있어, 상당히 유용한 객체 내장 메서드를 많이 보유하고 있으므로, 객체를
//다루어 서비스를 제작하는 것에 고려사항으로 추가하여, 더 편리하게 사용해보는 연습을 도모해보시기 바랍니다.

const exampleObject = {
  name : {
    korean : "공욱재쌤짱!",
    english : "kong Ukjae"
  },
  age:20,
  email:"kongukjae@gmail.com"
}
// 배열 메서드처럼 객체에도 .hasOwnProperty() 메서드가 있다.
// .hasOwnProperty()메서드는 객체가 특정 속성을 가지고 있는지 확인할 수 있다.
//return타입은 아래에서 확인 할 수 있듯 boolean 타입으로 간단하게 확인할 수 있다.
console.log(exampleObject.hasOwnProperty('name'))// true
console.log(exampleObject.hasOwnProperty('age'))// true
console.log(exampleObject.hasOwnProperty('address'))// true
