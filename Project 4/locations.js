//locations.js
//Locations and inventory

function btn_click_score() {  //function for score, updates 5 each time
	alert(score);
}

function init(){  //on load this brings up the start text..
	init_visibility();
	start();
}

//The following functions have messages for all the locations in the game. The switch-case calls upon these function when you are at each of these locations in the game


function start(){
	var message = " " + " " + "You were on vacation in the South Pacific when your small cruise ship developed a mechanical failure and sunk! Only a few people survived along with your self. After floating in a life raft for two days you washed ashore on a deserted island. All you have in the life raft is a compass. The time has come to find food and water."
				
	var message_2 = " " + " " + "Decide whether you want to travel North, South East or West. Choose wisely because the island is uncharted. If you get hurt no one coming to your rescue!"
				
	updateText(message_2);
	updateText(message);
}						
function north_button_heart_of_island() { 
	var message= "You are traveling into the heart of the island! Dense jungles, and dangerous terrian lays ahead.";
	updateText(message);
	gameLoc(NORTH);
	north_btn_visibility();	
	score = score+5; 
	gameLocation = 1;			    
}
function north_path() {  
	var message_path = "You find a path which leads into the island....maybe you are not alone!";
	updateText(message_path);		
	gameLoc(NORTH);
	north_btn_visibility();
	score = score+5;		 	      
}
function north_mtn() {
	var message_mtn  = "You are slowly climbing up a very large mountain, there was no other way.";
	updateText(message_mtn);
	gameLoc(NORTH);
	north_btn_visibility();
	score = score+5; 	      
} 
function north_cave() {					
	var message_cave = "You are in a small cave! To the WEST is a backpack.";							
	updateText(message_cave);
	gameLoc(NORTH);
	north_btn_visibility_cave(); 
	score = score+5;
}  		  	  
function north_water(){
	var message_water = "Finally you found water...drink up!";
	gameLoc(NORTH);
	score = score+5;
}
function north_raft(){
	raft();
	north_btn_visibility_raft();
	gameLoc(NORTH);
}
function east_button_down_beach() {	
	var message = "East part of the beach near a cluster of palm trees. Looking NORTH you see an odd shape.";
	updateText(message);
	gameLoc(EAST);
	east_btn_visibility();
	score = score+5;  								
}
function south_button_ocean() { 
	var message = "You turn around and walk back to the edge of the water, all you can see is the vast ocean with no boats in sight.";
	updateText(message);
	gameLoc(SOUTH);
	south_btn_visibility();
	score = score+5;    			    
}
function south_box(){
	var message_box = "You open the box!";
	updateText(message_box);
	map();
	south_btn_visibility_box();
	gameLoc(SOUTH);
	score = score+5;			 
}
function west_gunpowder() {
	gunPowder();
	west_btn_visibility_gunpowder();
	gameLoc(NORTH);
}							
function west_button_beach() {	
	var message = "After walking down the west side of the island you come across a run down shack.";
	gameLoc(WEST); 
	updateText(message);
	west_btn_visibility()
	score = score+5;
}   				
function west_door(){
	var message_door = "You jiggle the door, push, and enter slowly.";
	updateText(message_door);
	gameLoc(WEST); 
	west_btn_visibility_door();
	score = score+5; 
}
function west_room(){
	var message_room_west = "After your eyes adjust to the dim lighting you see a box on the SOUTH side of the room.";
	updateText(message_room_west);
	west_btn_visibility_room();
	gameLoc(WEST);
	score = score+5;
}

//Lets the player know what he/her has found throughout the game. Every function below the inventory function relate to an item that can be found throughout the game. Some are not used in project 3, but will be used in future versions. 

function player_inventory() {
	var message = "Inventory: ";
	if (inventory_raft === true) { 
		message = message + " " + "Raft";
	}
		if (inventory_gunpowder === true) { 
			message = message + " " + "Gunpowder";
		}
			if (inventory_map	=== true) {
			message = message + " " + "Map";
			}
				updateText(message);
}
function gunPowder() {
	if(inventory_gunpowder === false){
		updateText("In the backpack is gunpowder!....take gunpowder");
		updateText("You have gunpowder.")
		inventory_gunpowder = true; 
		
		}
			else if (inventory_gunpowder === true){
				updateText("You already have gunpowder!");
		}
}
function map() {
	if(inventory_map === false){
		updateText("You have found a map of the island!");
		inventory_map = true;
	}
			else if (inventory_map === true){
				updateText("You already have found the map!");
		}
}
function flaregun() {
	if(inventory_flaregun === false){
		updateText("You have a flare gun!");
		inventory_flaregun = true;
	}
}
function rope() {
	if(inventory_rope === false){
		updateText("You have 100ft of rope!");
		inventory_rope = true;
	}
}
function raft() {
	if(inventory_raft === false){
		updateText("You have found a life raft! Must have washed up onto the beach from your ship.");
		inventory_raft = true;
		}
			else if (inventory_raft === true){
				updateText("You already have the raft!");
			}
}
			
//HELP from ---http://www.w3schools.com/jsref/prop_style_visibility.asp to hide the buttons
function init_visibility() {  
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="hidden";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}  
function north_btn_visibility() {  
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="hidden";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
function north_btn_visibility_cave() {  
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="hidden";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
function north_btn_visibility_raft() {  
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="hidden";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
function south_btn_visibility() {
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible"; 
}
function south_btn_visibility_box() {
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="hidden";
    document.getElementById("btn_SOUTH").style.visibility="hidden";
}
function east_btn_visibility() {
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible"; 
}
function west_btn_visibility() {
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
function west_btn_visibility_gunpowder() {
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="hidden";
}
function west_btn_visibility_door(){
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
function west_btn_visibility_room(){
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="hidden";
    document.getElementById("btn_EAST").style.visibility="visible";
	document.getElementById("btn_SOUTH").style.visibility="visible";
}
function false_visibility(){
	document.getElementById("btn_NORTH").style.visibility="visible";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}
