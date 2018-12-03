/*새를 정의한다*/
class Bird{
	/*변수-->property , 함수--> method*/	
	constructor(){
		this.name="그냥새";
		this.wing=2;
		this.legs=2;
	}
	eat(){
		//console 입출력이 가능한 CLI 명령모드
		console.log("새가 먹이를 먹는다");
	}
	fly(){
		console.log("새가 난다");
	}
}