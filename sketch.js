var gross;
var namaste; 
var gameState = 0;
var textinp, button,button2;
var welcome;
var text1;
var game;
var gameBg, chironPic, chbc;
var chiron;
var txt1 , txt2, txt3;
var button1;
var playerimg,lukeimg;
var flag = false;
var delay;


function preload(){
gameBg  = loadImage("gods.png");
chironPic = loadImage("chiron.png");
chbc = loadImage("chbc.jpg");
//txt1 = loadAnimation('textpics/t1.jpg','textpics/t2.jpg','textpics/t3.jpg');
//player = loadAnimation("shan.png","shan1.png");


}


function setup() {
  createCanvas(1200, 600);
  gross = createRadio();
  button1 =createButton('Continue');
  chiron = createSprite(600,300,50,150);
  welcome = createElement("h1");
 // txt1 = createElement("h4");
  text1 = createElement("h4");
  namaste = createButton('Picked =>');
  textinp = createInput();
  button = createButton('Enter');
  button2 = createButton('Continue-->');
  gross.option('red');
  gross.option('blue');
  gross.option('gold');
  gross.option('green');
  gross.option('silver');
  gross.option('pink');
  gross.style('width', '60px');
  
  delay = new p5.Delay();
  game = new Game1("duh!");

 

}



function draw() {
      background(255);

      if(gameState===0){
        background(gameBg);
        gross.position(200,100);
        namaste.position(200,250);
        textinp.hide();
       
        button.hide();
        button2.hide();
        chiron.visible = false;
        fill(0);
        textSize(30);
        text('Choose A Color',120,50);
        namaste.mousePressed(()=>{
        gross.hide();
        namaste.hide();
        gameState = 1;

      });
      }

      if(gameState === 1){
       // sec = second();
       // console.log(sec);
        background('goldenrod')
        text1.html('Name');
        text1.position(50,30)
        textinp.position(100,50);
        button.position(200,100);
        textinp.show();
        button.show();
        
        chiron.visible = false;
        var name = textinp.value();
        button.mousePressed(()=>{
        
        textinp.remove();
        button.remove();
        text1.remove();
        welcome.html('Welcome To the Camp '+'<br>'+name);
        welcome.position(100,150);
        button2.show();
        button2.position(800,500);
        button2.mousePressed(()=>{
          gameState = 2;
        });


         });
      }


      if(gameState === 2){
        background(chbc);
        welcome.remove();
        button2.remove();
        
        chiron.addImage("something",chironPic);
        
        button1.position(800,550);
        chiron.visible = true;
        button1.mousePressed(()=>{
          gameState = 3;
        })
      }

      if(gameState === 3){
        chiron.destroy();
        console.log(gameState);
        button1.remove();
        text(game.lhp,game.luke.x - 20,game.luke.y - 20 );
        text(game.php,game.player.x - 20,game.player.y - 20 );
        


        if(game.lhp === 0){
          game.luke.visible = false;
          game.php = 30;;
          console.log("FIRST TASK DONE");
        }
      if(flag===true){
        game.php -= 10;
        flag = false;
        game.luke.shapeColor = "yellow";
      }
        drawSprites();
      }

      
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
  console.log("sword attacked");
  game.lhp -= 10;
  flag = true;
  game.player.shapeColor = "red"; 
  delay.process(flag,10,0.8); 
}

}