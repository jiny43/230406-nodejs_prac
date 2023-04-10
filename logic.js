const nameValue = {
  name : "jieun",
  age : 20,
  email : "jieun@gmail.com"
}

let oppend = ["jieun", 20, "jieun@gmail.com"];
let target = [];

function isNameCheck(key,value){
  if(key === value){
    return true;
  }else{
    return false;
  }
}

for(let key in nameValue){
  target.push(nameValue[key]);
}
//nameValue 의 키(name,age,email) 들을 target에 push한다
//terget[]

oppend.forEach((element,index)=>{
  if(target[index]){
    console.log(isNameCheck(element, target[index]));
    //terget[index]라면 isnameCheck(element, target[index])
    
  }else{
    console.error("not found");
  }
});

