class Umbrella{
    constructor(x,y,r){

        this.umbrella = Bodies.circle(x,y,r,{isStatic:true});
        this.r = 350;
        this.manImg = loadImage("images/Walking Frame/walking_1.png");
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.manImg,pos.x,pos.y,300,300);
    }
}