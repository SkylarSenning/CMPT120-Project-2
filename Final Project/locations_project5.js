//locations.js
//Locations and inventory

function btn_click_score() {  //function for score, updates 5 each time
	updateText("Score : " + " " + score);
}

function init(){  //on load this brings up the start text..
	init_visibility();
	start();
}

//The following functions have messages for all the locations in the game... The switch-case calls upon these function when you are at each of these locations in the game. I used to location prototype to create 13 different instances of location. all the locations are stored in the locations array 

var locations = new Array();
	

function start(){
	locations[13] = new game_location(13, "Start", "You were on vacation in the South Pacific when your small cruise ship developed a mechanical failure and sunk! Only a few people survived along with your self. After floating in a life raft for two days you washed ashore on a deserted island. All you have in the life raft is a compass. The time has come to find food, water, and items for escape."
	+ "\n"
	+ "\n"
	+"Type Help to bring up the HELP CENTER");
	updateText(locations[13]);
	updateText("Play again by entering: Restart");

}
function escape(){
	escape_possible();
	escape_visibility()
}						
function north_button_heart_of_island() { 
	locations[1] = new game_location(1, "Jungle");
	locations[1].message = "You are traveling into the heart of the island! Dense jungles, and dangerous terrian lays ahead.";
	updateText(locations[1]);
	north_btn_visibility();			    
}
function north_path() {  
	locations[2] = new game_location(2, "Path");
	locations[2].message = "You find a path which leads into the island, a few feet away is a pile of rope....Take!";
	updateText(locations[2]);		
	north_btn_visibility();
		if (inventory_rope === true){
			locations[2].message = "You are back at the path in to the island, the rope is gone...check your inventory!";
			updateText(locations[2])
		}		 	      
}
function north_mtn() {
	locations[3] = new game_location( 3, "Mountain");
	locations[3].message = "You are slowly climbing up a very large mountain, there was no other way.";
	updateText(locations[3]);
	north_btn_visibility();      
} 
function north_cave() {					
	locations[4] = new game_location( 4, "Cave"); 						
	locations[4].message = "You are in a small cave! To the WEST is a backpack.";
	updateText(locations[4]);
	north_btn_visibility_cave(); 
}  		  	  
function north_raft(){
	locations[11] = new game_location( 11, "Raft")
	locations[11].message = "You have found a life raft! Must have washed up onto the beach from your ship....Take";
	updateText(locations[11]);
	north_btn_visibility_raft();
		if (inventory_raft === true){
			locations[11].message = "A raft used to be here, check your inventory!";
			updateText(locations[11])
		}
}
function east_button_down_beach() { 
	locations[10] = new game_location( 10, "Palm Tree"); 
	locations[10].message = "East part of the beach near a cluster of palm trees. Looking NORTH you see an odd shape.";
	updateText(locations[10]);
	east_btn_visibility(); 								
}
function south_button_ocean() {  
	locations[0] = new game_location( 0, "Beach");
	locations[0].message = "You turn around and walk back to the edge of the water, all you can see is the vast ocean with no boats in sight.";
	updateText(locations[0]);
	south_btn_visibility();   			    
}
function south_box(){
	locations[9] = new game_location( 9, "Package");
	locations[9].message = "There is a package on the floor....Take!";
	updateText(locations[9]);
	south_btn_visibility_box();
		if (inventory_map === true){
			locations[9].message = "The package is gone, check your inventory!";
			updateText(locations[9])
		}			 
}
function west_gunpowder() {
	locations[5] = new game_location( 5, "Backpack", "In the backpack is gunpowder!....Take");
	updateText(locations[5]);
	west_btn_visibility_gunpowder();
		if (inventory_gunpowder === true){
			locations[5].message = "The backpack is empty, check your inventory!";
			updateText(locations[5])
		}
}							
function west_button_beach() {	
	locations[6] = new game_location( 6, "Shack");
	locations[6].message = "After walking down the west side of the island you come across a run down shack.";
	updateText(locations[6]);
	west_btn_visibility();
}   				
function west_door(){
	locations[7] = new game_location( 7, "Shack Door");
	locations[7].message = "You jiggle the door, push, and enter slowly.";
	updateText(locations[7]);
	west_btn_visibility_door(); 
}
function west_room(){
	locations[8] = new game_location( 8, "Room");
	locations[8].message = "After your eyes adjust to the dim lighting you see a box on the SOUTH side of the room.";
	updateText(locations[8]);
	west_btn_visibility_room();
}


//HELP from ---http://www.w3schools.com/jsref/prop_style_visibility.asp to hide the buttons
function init_visibility() {  
	document.getElementById("btn_NORTH").style.visibility="visible";
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
function escape_visibility(){
	document.getElementById("btn_NORTH").style.visibility="hidden";
    document.getElementById("btn_WEST").style.visibility="visible";
    document.getElementById("btn_EAST").style.visibility="visible";
    document.getElementById("btn_SOUTH").style.visibility="visible";
}