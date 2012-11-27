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


var inventory = new Array(); //array that store the inventory items that can be found throught the game

//used the inventory/item prototype to create new instances of items

inventory[0] = new gameInventory( 5, "You have gunpowder" , "Gunpowder");
inventory[1] = new gameInventory( 6, "You have a map of the island!", "Map");
inventory[2] = new gameInventory( 11, "You have a raft to leave the island on", "Raft");
inventory[3] = new gameInventory( 2, "You have 100ft of rope", "rope");


//function is linked to the inventory button and to the input box...when player "Takes" an item it can be found for future reference in the inventory. 

function displayInventory(){
	if (inventory_gunpowder === true){
		updateText(inventory[0]);
	}if (inventory_map === true){
		updateText(inventory[1]);
	}if (inventory_raft === true){
		updateText(inventory[2]);
	}
}

// The following fuctions handle all the logic of the items in the game. They all start off as false...if they are taken the functions change to true....if the player tries to take the same item again they are told they the item has already been found. 	

function gunPowder() {
	if(inventory_gunpowder === false){
		updateText(inventory[0]);
		inventory_gunpowder = true;
		score = score+5; 
	}
		else if (inventory_gunpowder === true){
			inventory[0].message = "Gunpowder already picked up"; 
			inventory[0].item    = "None";  
			updateText(inventory[0]); 
			west_btn_visibility_gunpowder(); 
		}
}
function map() {
	if(inventory_map === false){
		updateText(inventory[1]);
		inventory_map = true;
		score = score+5;
	}
		else if(inventory_map === true){
				inventory[1].message = "You already have found the map!"
				inventory[1].item	   = "None" 
				updateText(inventory[1]);
		}
}
function flaregun() {
	if(inventory_flaregun === false){
		updateText("You have a flare gun!");
		inventory_flaregun = true;
		score = score+5;
	}
}
function rope() {
	if(inventory_rope === false){
		updateText(inventory[3]);
		inventory_rope = true;
		score = score+5;
	}
		else if(inventory_rope === true){
				inventory[3].message = "You already have found the rope!"
				inventory[3].item	   = "None" 
				updateText(inventory[3]);
		}
}
function raft() {
	if(inventory_raft === false){
		updateText(inventory[2]);
		inventory_raft = true;
		score = score+5;
		}
			else if (inventory_raft === true){
				inventory[2].message = "You already have the raft!";
				inventory[2].item	= "None";
				updateText(inventory[2]);
			}
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

























