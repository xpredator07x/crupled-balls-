class Paper {
constructor(){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2,
        'velocity':4,
        }
      
        
    this.body=Bodies.circle(60,33,10);

       this.width=10;
        this.height=10;

        World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    ellipseMode(RADIUS)
       fill(255);
    ellipse(pos.x,pos.y,this.width,this.height);
   
}
}
