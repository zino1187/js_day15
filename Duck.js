/*오리를 정의한다*/
class Duck{
	/*변수-->property , 함수--> method*/	
	constructor(){
		this.name="오리";
		this.wing=2;
		this.legs=2;
	}
	eat(){
		//console 입출력이 가능한 CLI 명령모드
		console.log("오리가 먹이를 먹는다");
	}
	fly(){
		console.log("오리가 난다");
	}
}