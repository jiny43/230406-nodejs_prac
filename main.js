//임의의 객체, 이것은 회원가입 등 절차에 의해 db에서 가져온 객체이거나,
//외부에서 불러온 JSON 파일이라는 점으로 가정

const nameValue = {
  name: "jungjieun",
  age : 20,
  email: "jieun@gmail.com"
}

//@param {object} nameObject
//@returns boolean

//isNaMeCheck() 함수 내부는 리터럴 덩어리이므로
//좋은 함수는 아니지만 , 독해를 위해 제작한 패턴
//isNameCheck()는 단어 앞 (접두사)에 is를 붙여 리턴이 boolean임을 알 수 있다.
//함수는 Typeof()검사를 통해 인수가 객체가 아니면 에러를 발생시킨다.
//에러가 발생되면 그 다음 실행은 진행되지 않는다.(에러처리의 기본형)
//사람이 작성할 때는 이러한 조건들이 눈에 보이지만,
//컴퓨터는 이러한 조건들을 모두 파악하기 힘들기 때문에
//특히 데이터타입과 함수는 ' 필요한(의도한) 것만 작동되게 하는 것이 중요하다.

function isName0Check(nameObject){
  if(typeof(nameObject)!== "object"){
    return new Error("parameter is not an object");
  }

//아래의 중첨된 세 개의 if문은 조건식이 ' 정해진 값'을 요구한다.
//실제 활용에서는 조건식 우항(오른쪽)과 같은 데이터는 모두 매개변수로 받아야 한다.
//매우 까다롭게 if (참조건)을 받아내려고 하는 의도를 확인 할 수 있다.
//콜백 패턴이기에 가독성이 매우 떨어지는 점을 확인한다.
if (nameObject.name === "kongukjae"){
  if(nameObject.age === 20){
    if(nameObject.email === "kongukjae@gmail.com"){
      return true;
    } else {
      return false;
    }
  }else{
      return false;
    }
  }else{
    return false;
  }
}
