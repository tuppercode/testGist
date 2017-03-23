 var flyers;
 var player;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //canvas.parent('sketchID');

  flyers = new Group();
  player = createSprite(200, 200, 10, 10);
   // spr = createSprite(100, 100, 30, 30);
  player.shapeColor = color(255);
  var img = loadImage("http://img.clipartall.com/-horse-clipart-6680_4427.png");
//  var img = loadImage("https://codepo8.github.io/canvas-images-and-pixels/img/horse.png");  
  
    var img2 =loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Halictus_rubicundus_silhouette.svg/196px-Halictus_rubicundus_silhouette.svg.png");
  player.addImage(img);
  player.scale=.5;
  var currFly;
  for (var i = 0; i <10; i++) 
  {
      currFly=createSprite(random(100,300), random(100,300), random(10,10), random(10,10)); 
    

    currFly.addImage(img2)
   currFly.scale=random(.1,.3);
 

    currFly.friction=.99;
    flyers.add(currFly);
    
  }
  
  
  //var bg=loadImage("");


  
}

function draw() {
  var currentFlyer;

 player.position.x= mouseX;
 player.position.y=mouseY;
 

  for (var i = 0; i <flyers.length; i++) {
 
   
   currentFlyer=flyers[i];
   //currentGiraffe.pointTo(player.x,player.y);
   //currentGiraffe.setSpeedAndDirection(random(1,3),currentGiraffe.rotation);
     //currentGiraffe.attractionPoint(random(0,.1),player.position.x,player.position.y);
    currentFlyer.attractionPoint(0.3,player.position.x,player.position.y);
   
   }
   
  background(100);
  flyers.bounce(flyers);
  drawSprites();

}

