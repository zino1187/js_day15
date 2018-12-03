/*게임에 등장할 블럭을 정의한다*/
class Block extends GameObject{
	//내가 초기화되기 전에, 반드시 부모가 먼저 초기화되어야 한다
	constructor(container,width,height,x,y,velX,velY,bg){
		//현재 나의 클래스는 보유한 데이터가 전혀 없다..하지만 상속을 
		//선언함(extends)과 동시에 부모가 가진 모든 게, 곧 내것이
		//되므로, 부모의 데이터는 곧 내가 가진 데이터가 되버린다..
		//즉 재산을 물려받은 꼴이므로, 상속이라 한다..
		//아래의 코드에서 super() 의 매개변수에 넘겨진 데이터는 
		//부모 객체의 GameObject의 멤버변수로 전달될 것이고, 
		//그 전달된 매개변수는 내꺼다!!
		super(container,width,height,x,y,velX,velY,bg);
		this.hit=false;//밟혔는지 여부를 체크하는 논리값!!
	}
}