const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;




function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,800,500,20);
    //platform = new Ground(150, 305, 300, 170);

    for(var k = 0;k <= width; k = k +80){
        divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
    }

    for(var j = 40;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,75))
    }

    for(var j = 15;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,175))
    }

    for(var j = 40;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,275))
    }

    for(var j = 15;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,375))
    }
}



function draw(){
    background("black");
    Engine.update(engine);
  
    ground.display();

    
    for(var k = 0;k < divisions.length; k = k + 1){
        divisions[k].display();
    }

    for(var k = 0;k < plinkos.length; k = k + 1){
        plinkos[k].display();
    }
  
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10), 10, 10));
    }

    for(var k = 0;k < particles.length; k = k + 1){
        particles[k].display();
    }
}

