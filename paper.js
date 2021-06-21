class Paper{
	constructor(x,y,r){
        
            
		 var options = {
            isStatic:false,
			'density':1.2,
			'friction': 0.5,
			'restitution':0.3
		};
        this.image=loadImage("paper2.png");
		this.x=x;
		this.y=y;
		this.r= r;
		this.body=Bodies.circle(this.x, this.y, this.r/2,options);
		World.add(world, this.body);
	}

	display(){
			var paperpos = this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			imageMode(CENTER)
    		image(this.image,0, 0, 90,90);
			pop()
	}
}
