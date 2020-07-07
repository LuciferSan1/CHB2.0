class Enter{
constructor(){
  this.button1 = createButton("ENTER");
  this.textinp = createInput("Name");
  
  
}
display(){
  this.button1.position(180,230);
  this.textinp.position(150,200);
  this.button1.mousePressed(()=>{
    gameState=1;
    this.button1.hide();
    this.textinp.hide();
  });
  


} 
  
}