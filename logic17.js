const nameValue = {
  name : "jieun",
  age : 20,
  email : "jieun@gmail.com"
}

let oppend = ["jieun", 20, "jieun@gmail.com"];
let target = [];
//속성 값을 저장할 곳

function isNameCheck(key,value){
  if(key === value){
    return true;
  }else{
    return false;
  }
}
//namevalue의 속성을 순회해서 namevalue객체의 각 속성값을 target 배열에 추가한다.
for(let key in nameValue){
  target.push(nameValue[key]);
}


oppend.forEach((element,index)=>{
  if(target[index]){
    console.log(isNameCheck(element, target[index]));
    //각 콜백함수는 target배열의 같은 위치에 있는 값을 가져와서,
		//isnamecheck 함수를 사용해서 해당 값과 oppend 배열의 값을 비교한다.
  }else{
    console.error("not found");
  }
});
console.dir(target);
