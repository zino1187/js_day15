/*
게임에 등장할 모든~~~객체의 최상위 객체를 정의한다
최상위 코드일수록 보편적인 코드가 와야 한다..	
*/
class GameObject{
	constructor(container,width,height,x,y,velX,velY,bg){
		this.container=container;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.velX=velX;
		this.velY=velY;
		this.bg=bg;

		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.background=this.bg;

		this.container.appendChild(this.div);
	}
	//물리량 변화~~
	tick(){
		this.x+=this.velX;
		this.y+=this.velY;
	}
	//그래픽 처리 메서드 정의
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}

}