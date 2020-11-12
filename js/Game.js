class Game{
constructor(){


}
//get the gameState from the database 
getState(){
var gameStateRef=database.ref('gameState');
gameStateRef.on("value",function(data){

gameState=data.val();

});

} 

//update the gameState into the database 
update(state){
database.ref('/').update({
gameState:state

});


}

//start the game 
start(){
if(gameState===0){
player=new Player(); 
player.getCount();

form= new Form();
form.display();

} 


}
}