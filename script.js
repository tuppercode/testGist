 var flyers;
 var player;
 var img;
 var img2;
function preload(){
  img2 = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Halictus_rubicundus_silhouette.svg/196px-Halictus_rubicundus_silhouette.svg.png");
   //  img = loadImage("");  
       img = loadImage("https://codepo8.github.io/canvas-images-and-pixels/img/horse.png"); 
  
}
function setup() {
   createCanvas(600, 600);

   //canvas.parent('sketchID');

   flyers = new Group();
   player = createSprite(200, 200, 10, 10);
   // spr = createSprite(100, 100, 30, 30);
   player.shapeColor = color(255);

 //  img = loadImage("https://sway.com/s/dVEkwUreMJ2YUrBf/images/oetrS9nkvAd-S8");
   

   player.addImage(img);
   player.scale = .5;
   var currFly;
   for (var i = 0; i < 10; i++) {
     currFly = createSprite(random(100, 300), random(100, 300), random(10, 10), random(10, 10));

     currFly.addImage(img2);
     currFly.scale = random(.1, .3);

     currFly.friction = .99;
     flyers.add(currFly);

   }

   //var bg=loadImage("");

 }

 function draw() {


   var currentFlyer;

   player.position.x = mouseX;
   player.position.y = mouseY;

   for (var i = 0; i < flyers.length; i++) {

     currentFlyer = flyers[i];
     //currentGiraffe.pointTo(player.x,player.y);
     //currentGiraffe.setSpeedAndDirection(random(1,3),currentGiraffe.rotation);
     //currentGiraffe.attractionPoint(random(0,.1),player.position.x,player.position.y);
     currentFlyer.attractionPoint(0.3, player.position.x, player.position.y);

   }

   background(100);
  //    ellipse(100, 100, 80, 80);
  //    image(img, 10, 10);
   flyers.bounce(flyers);
   drawSprites();

 }