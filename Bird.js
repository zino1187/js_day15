/*새를 정의한다*/
class Bird{
	/*변수-->property , 함수--> method*/	
	constructor(name,legs){
		this.name=name;
		this.wing=2;
		this.legs=legs;
	}
	eat(){
		//console 입출력이 가능한 CLI 명령모드
		console.log("새가 먹이를 먹는다");
	}
	fly(){
		console.log("새가 난다");
	}
}