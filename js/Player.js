class Player{
constructor(){

}
//getCount function get playerCount from the database 

getCount(){
var playerCountRef=database.ref('playerCount');
playerCountRef.on("value",function(data){
playerCount=data.val();
})

}

//updates the player count in the database
updateCount(count){
database.ref('/').update({
playerCount:count
});

}

//updates player name in the database 
update(name){
var playerindex="player"+playerCount;
database.ref(playerindex).set({
name:name
});

}

}