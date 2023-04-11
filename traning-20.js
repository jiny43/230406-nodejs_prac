const myaql = require('mysql');

class Pokemon {
  constructor(name, type, level){
    this.name = name;
    this.type = type;
    this.level = level;
  }

 //getter 메서드는 문장을 만드는 기능을 한다. 
get info(){
  return `이름: ${this._name}, 타입: ${this._type}, 레벨: ${this._level}`;
}

//setter 메서드는 데이터 타입을 검사해 안전을 높인다.
set name(value){
  if(typeof value ==="string"){
    this._name = value;
  } else {
    console.log("이름은 문자열로 입력해주세요.");
  }
}
set type(value){
  if(typeof value ==="string"){
    this._type = value;
  }else {
    console.log("타입은 문자열로 입력해주세요.");
  }
}
set level(value){
  if(typeof value === "number"){
    this._level = value;
  } else {
    console.log("레벨은 숫자로 입력해주세요.");
  }
}
}



