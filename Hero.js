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
		this.goDown();
		this.walk();
	}
	goDown(){
		this.velY+=this.g;
		this.y = this.y+this.velY;

		//다수의 벽돌을 대상으로 충돌검사!!!
		for(var i=0;i<blockArray.length;i++){
			var hit=collisionCheck(this, blockArray[i]);
			if(hit){//벽돌과 마주쳤다면, 벽돌 위에 있어야 한다..
				blockArray[i].div.style.background="pink";
				this.y=blockArray[i].y - this.height;//고정!!
			}
		}
	}
	//점프란 양수방향으로 적용되고 있는 중력을 잠시 이겨내는 행위...
	//따라서 일시적으로 음수방향의 값을 가지게 하면 된다..
	jump(){
		this.velY=-4;	
	}
	walk(){
		this.x+=this.velX;
	}
}