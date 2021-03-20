class Drop{
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
        }
        this.r = 3;
        this.rain = Bodies.circle(x,y,r,options);
        World.add(world,this.rain);
    }

    UpdateR(){
        if(this.rain.position.y>500){
            Matter.Body.setPosition(this.rain,{x:random(100,900),y:random(0,500)})
        }

    }

    display(){
        fill("lightblue")
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,4,4);
    }
}