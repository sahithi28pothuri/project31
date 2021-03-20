const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var thunder, thunder_Img1,thunder_Img2,thunder_Img3,thunder_Img4;
var thunderCreatedFrame = 0;
var rand;

function preload(){
	thunder_Img1 = loadImage("images/thunderbolt/1.png");
	thunder_Img2 = loadImage("images/thunderbolt/2.png");
	thunder_Img3 = loadImage("images/thunderbolt/3.png");
	thunder_Img4 = loadImage("images/thunderbolt/4.png");

}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(1200,600);

	umbrella = new Umbrella(600,500,110);

	if(frameCount%200===0){
		for(var i=0; i<maxDrops;i++){
			drops.push(new Drop(random(0,1000),random(-100,500),15));
			//drops[i].UpdateR();
			drops[i].display();
		}
		
	}
}


function draw() {
	background(25);
	Engine.update(engine);

	
	umbrella.display();

	for(var i=0; i<maxDrops;i++){
		drops[i].display();
		drops[i].UpdateR();
	}

	

	thunderStorm();

	drawSprites();

	
}


function thunderStorm(){
	rand = Math.round(random(1,4));
	if(frameCount%80===0){
		thunderCreatedFrame = frameCount;
		thunder = createSprite(random(300,370),random(10,300),10,10);
		switch(rand){
			case 1: thunder.addImage("thunder",thunder_Img1);
					break;
			case 2: thunder.addImage("thunder",thunder_Img2);				
					break;
			case 3: thunder.addImage("thunder",thunder_Img3);				
					break;
			case 4: thunder.addImage("thunder",thunder_Img4);				
					break;
			default: break;
		}
		thunder.scale = random(0.3,0.6)

	}

	if(thunderCreatedFrame+10 === frameCount && thunder){
       thunder.destroy();
    }
	

}
