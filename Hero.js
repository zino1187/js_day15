class Hero extends GameObject{
	constructor(container,width,height,x,y,velX,velY,bg){
		super(container,width,height,x,y,velX,velY,bg);	
		this.g=0.05;
	}	
	//부모가 이미 가진 메서드를 그대로 사용하기엔 나한테 상황에
	//맞지 않을때 해당 메서드를 나에 맞게끔 커스터마이징 할수 
	//있는데, 이러한 메서드 중복 정의 기법을 오버라이드..
	//= 업그레이드
	tick(){
		this.velY+=this.g;
		this.y = this.y+this.velY;

		//충돌검사!!!
		var hit=collisionCheck(this, blockArray[i]);

	}
}