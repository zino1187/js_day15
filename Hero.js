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
		//for문 내에서 주인공을 머물게 할수는 없다..
		//왜?? for문을 돌면서 충돌여부를 검사한다 할지라도,
		//나머지 블락이 false를 만들어내 버리므로, if문에서 
		//주인공을 멈추게 할수는 없다..왜 실행부는 결국 else문을 
		//수행하게 되므로.. 해결책) for문을 돌면서 주인공이 어딘가
		//블럭을 밟고 있는지 여부만 조사하면 된다.. 밟고 있다면
		//주인공은 그 블럭에 머물러 있게 하겠다..
		var hitCount=0;

		//다수의 벽돌을 대상으로 충돌검사!!!
		for(var i=0;i<blockArray.length;i++){
			var hit=collisionCheck(this, blockArray[i]);
			var block=blockArray[i];
			if(hit){//벽돌과 마주쳤다면, 벽돌 위에 있어야 한다..
				block.hit=true;
				this.y=block.y - this.height;
			}else{//발이 벽돌에서 벗어난 경우만 다시 중력재개
				block.hit=false;
			}
		}
		//전체 벽돌을 대상으로 hit 상태가 true인것이 있다면
		//주인공은 벽돌을 밟고 있는 상태이다.
		for(var i=0;i<blockArray.length;i++){
			if(blockArray[i].hit){
				hitCount++;
			}
		}

		//주인공을 해당 벽돌에 멈추게 한다 
		if(hitCount>0){ //서있게 처리..
			
		}else{//다시 떨어지게..
			this.velY+=this.g;//가속도 값 누적!!
			this.y+=this.velY;//누적된 값을 y에 적용..
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