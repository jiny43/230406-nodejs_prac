//단순 " 문자열"을 리턴하는 elementMaker 함수
//HTML 형식을 따랏을 뿐 HTML fh parsing 되기 전까지는 단순한 문자열이다.
function elementMaker(tagName, content){
return `<${tagName}> ${content} </${tagName}>`
}
//매개변수 하나는 큰개념으로 "데이터"라고 설정
//reder라는 함수는 어디까지나 문자열을 리턴하는 함수이다.
function render(data){
	return`
		<html>
			<head>
        <title>KOREA Digital training</title>
      </head>
      <body>
        ${data}
      </body>
    </html>
    `;
}
//elementData라는 배열은 문자열 한웅큼씩 하나의 '원소'로 10개가 들어간다.

let elementsData = [];
for(let i = 0; i<10; i++){
  elementsData.push(elementMaker('h1',`KDT-${i}`));
};
//join()메서드는 배열의 모든 원소를 연결해 하나의 문자열로 
//만들어 간단하게 <h1>KDT-${n}<h1>을 생성한 것을 확인 할 수 있다.
render(elementsData.join(''));
