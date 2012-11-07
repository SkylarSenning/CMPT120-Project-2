//game_location.js

function btn_go_click() { //IF-ELSE to figure out user input 
	var txt	= document.getElementById("txtCommand");
							
	if ((txt.value === "N") || (txt.value === "n")) {
		direction_switch(north);
	}
	else if ((txt.value === "S") || (txt.value === "s")){ 
		direction_switch(south);
	}
	else if ((txt.value === "E") || (txt.value === "e")){
		direction_switch(east);
	}
	else if ((txt.value === "W") || (txt.value === "w")){
		direction_switch(west);
	}
	else if ((txt.value === "Help") || (txt.value === "help")){
		game_help();
	}
	else if ((txt.value === "inventory") || (txt.value === "Inventory")){
		player_inventory();
	} 
	else {
	updateText("Please enter a valid command: N, S, E, W, n, s, e, w, inventory, Inventory"); 
	}
}				
function game_help() {
	var message = "Possible commands: N, S, E, W, n, s, e, w, inventory, Inventory";
	updateText(message); 
}

//Instead of linking location together through seperate functions switch-case is used in this project. Each case relates to a function that stores the message and other important functions related to game play. 
//Used notes from lab to make one switch-case to handle all the functions and updates to the text area. Then made a switch-case inside a switch case to change locations throughout the game. 

function location_switch(area) {
	switch(area) {
    	case "Jungle"      		: north_button_heart_of_island();
			break;
		case "NorthPath"  		: north_path();
			break;
		case "NorthMountain"	: north_mtn();
			break;
		case "NorthCave"		: north_cave();
			break;
		case "NorthRaft"		: north_raft();
			break;
		case "GunPowder"		: west_gunpowder();
			break;
		case "PalmTree"			: east_button_down_beach();
			break;
		case "Ocean"			: south_button_ocean();
			break;
		case "Box"				: south_box();
			break;
		case "Shack"			: west_button_beach();
			break;
		case "Shack_Door"		: west_door();
			break;
		case "Shack_Room"		: west_room();
			break;
		case "Start"			: init();
			break;
		default:				updateText("Can't go this way. Try another direction...");
			break;
		}
}
function direction_switch(travel) {
	switch(travel) {
		case north	 :
			switch(player_location){
				case "Ocean"			:	player_location = "Jungle"
											location_switch("Jungle");
					break;
    			case "Jungle" 	 		:   player_location = "NorthPath";
                    			  	 		location_switch("NorthPath");
                   	break;
				case "NorthPath" 		:  	player_location = "NorthMountain";
							 				location_switch("NorthMountain");
					break;
				case "NorthMountain"    : 	player_location = "NorthCave";
							 				location_switch("NorthCave");
					break;
				case "Box"				:	player_location = "Shack_Room";
											location_switch("Shack_Room");
					break;
				case "PalmTree"			:	player_location = "NorthRaft";
											location_switch("NorthRaft");
					break;
				default:				updateText("Can't go this way. Try another direction...");
					break;		 		
				}
		break;
		case east   :
			switch(player_location){
				case "Ocean"	 		:	player_location = "PalmTree";
											location_switch("PalmTree");
					break;
				case "Shack_Room"		:	player_location = "PalmTree";
											location_switch("PalmTree");
					break;
				case "GunPowder"		:	player_location = "NorthCave"
											location_switch("NorthCave");
					break;
				case "Shack"			:	player_location = "PalmTree";
											location_switch("PalmTree");
					break;
				case "Shack_Door"		:	player_location = "PalmTree";
											location_switch("PalmTree");
					break;
				default:				updateText("Can't go this way. Try another direction...");
					break;
				}
		break; 
		case south   :		 
			switch(player_location){
				case "Jungle"    		:	player_location = "Ocean";
											location_switch("Ocean");
					break;
				case "PalmTree"			:	player_location = "Ocean";
											location_switch("Ocean");
					break;
				case "NorthPath"		:	player_location = "Ocean";
											location_switch("Ocean");
					break;
				case "NorthMountain"	:	player_location = "Ocean";
											location_switch("Ocean");
					break;
				case "NorthCave"    	: 	player_location = "Ocean";
							 				location_switch("Ocean");
					break;
				case "Shack_Room"		:	player_location = "Box";
											location_switch("Box");
					break;
				case "NorthRaft"		:	player_location = "PalmTree";
											location_switch("PalmTree");
					break;
				default:				updateText("Can't go this way. Try another direction...");
					break;
				}
		break;
		case west   :
			switch(player_location){
				case "Ocean"			:	player_location = "Shack";
											location_switch("Shack");
					break;
				case "PalmTree"			:	player_location = "Shack";
											location_switch("Shack");
					break; 
				case "Shack"			:	player_location = "Shack_Door";
											location_switch("Shack_Door");
					break;
				case "Shack_Door"		:	player_location = "Shack_Room";
											location_switch("Shack_Room");
					break;
				case "NorthCave"		:	player_location = "GunPowder";
											location_switch("GunPowder");
					break;
				default:				updateText("Can't go this way. Try another direction...");
					break;

				}
		break; 
	}
}

function gameLoc(path) { //Location from lab to track users game location
	if (path === 1) {
    	updateLocation("Heading North");
    } else if (path === 2) {
     	updateLocation("Heading South");          
    } else if (path === 3) {
        updateLocation("Heading East");
	} else if (path === 4) {
		updateLocation("Heading West"); 
	} else { 
		updateLocation("NOT A VALID PATH! GO BACK!");
	}
}
						 
