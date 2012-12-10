//
///inventory.js
//
//Lets the player know what he/her has found throughout the game. Every function below the inventory function relate to an item that can be found throughout the game. 
//Wire to function take(); 


var inventory_gunpowder 	= false;  //Items found in game booleans set to false and then change to true once player has picked up the item
var inventory_map 			= false;
var	inventory_flaregun 		= false;
var inventory_rope			= false;
var inventory_raft			= false;
var assemble				= false; 

var inventory = new Array(); //array that store the inventory items that can be found throught the game

//used the inventory/item prototype to create new instances of items

inventory[0] = new gameInventory( 5, "You have gunpowder" , "Gunpowder");
inventory[1] = new gameInventory( 6, "You have a map of the island!", "Map");
inventory[2] = new gameInventory( 11, "You have a raft to leave the island on", "Raft");
inventory[3] = new gameInventory( 2, "You have 100ft of rope", "rope");
inventory[4] = new gameInventory( 12, "Your raft is inflated and you have all you need to fight off what may try to attack you!....Paddle...your raft", "Built Raft");

//function is linked to the inventory button and to the input box...when player "Takes" an item it can be found for future reference in the inventory. 

function displayInventory(){
	if (inventory_gunpowder === true){
		updateText(inventory[0]);
	}if (inventory_map === true){
		updateText(inventory[1]);
	}if (inventory_raft === true){
		updateText(inventory[2]);
	}if (inventory_rope === true){
		updateText(inventory[3]);
	}else{ updateText("Inventory:");
	}
}

// The following fuctions handle all the logic of the items in the game. They all start off as false...if they are taken the functions change to true....if the player tries to take the same item again they are told they the item has already been found. 	

function gunPowder() {
	if(inventory_gunpowder === false){
		updateText(inventory[0]);
		inventory_gunpowder = true;
		score = score+5; 
		moveCount = moveCount + 1;
	}
		else if (inventory_gunpowder === true){
			updateText("Gunpowder has alreay been taken!"); 
			west_btn_visibility_gunpowder();
			moveCount = moveCount + 1; 
		}
}
function map() {
	if(inventory_map === false){
		updateText(inventory[1]);
		inventory_map = true;
		score = score+5;
		moveCount = moveCount + 1;
	}
		else if(inventory_map === true){
				updateText("You already have found the map!");
				moveCount = moveCount + 1;
		}
}
function flaregun() {
	if(inventory_flaregun === false){
		updateText("You have a flare gun!");
		inventory_flaregun = true;
		score = score+5;
		moveCount = moveCount + 1;
	}
}
function rope() {
	if(inventory_rope === false){
		updateText(inventory[3]);
		inventory_rope = true;
		score = score+5;
		moveCount = moveCount + 1;
	}
		else if(inventory_rope === true){
				updateText("You already have found the rope!");
				moveCount = moveCount + 1;
		}
}
function raft() {
	if(inventory_raft === false){
		updateText(inventory[2]);
		inventory_raft = true;
		score = score+5;
		moveCount = moveCount + 1;
		}
			else if (inventory_raft === true){
				updateText("You already have the raft!");
				moveCount = moveCount + 1;
			}
}
function assemble_raft(){
	if((assemble === false) && (area === 12)){ 
		updateText(inventory[4]);
		score = score+5;
		moveCount = moveCount + 1;
	}else {
		updateText("You alreayd built the raft! Get in it and....Paddle..");
		moveCount = moveCount + 1;
	}
}

function win(){
	locations[14] = new game_location( 14, "GAME OVER!")
	locations[14].message = "You paddle to the island and find a small Indian village. They offer to take you to a island a few days a way that has contact with the ouside world......you WIN!!!!!" + "\n" + "\n" + "Play again by entering: Restart";
	updateText(locations[14]);
	updateText("Score: " + " " + score)
	updateText("Moves: " + " " + moveCount)
	score = score+5;
	moveCount = moveCount + 1;

}
//This function is wired to the player input. If the player is in a certain area where they can pick up or take a item they can "Take" it and it is added to the inventory. 

function take_item(){
	if (area === 5) {
    	gunPowder();
	}else if (area === 9) {
   		map();
	}else if (area === 11) {
   		raft()
	}else if (area === 2){
		rope();
	}
}

function escape_possible(){
	locations[12] = new game_location( 12, "Escape");
	locations[12].message = "You dont have what you need to get to the island on the horizon.";
	updateText(locations[12]);
	moveCount = moveCount + 1;
		if ((inventory_gunpowder === true) && (inventory_raft === true) && (inventory_map === true) && (inventory_rope === true)){
			locations[12].message = "You have all you need to make it to the island where you see smoke clouds billowing from the 			shoreline....Assemble....your raft";
	 		updateText(locations[12]);
			score = score+5;
			moveCount = moveCount + 1;
		}		
}
























