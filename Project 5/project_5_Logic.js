function btn_go_click() { //IF-ELSE to figure out user input 
	var txt	= document.getElementById("txtCommand");
							
	if ((txt.value === "N") || (txt.value === "n")) {
		move(north);
	}
	else if ((txt.value === "S") || (txt.value === "s")){ 
		move(south);
	}
	else if ((txt.value === "E") || (txt.value === "e")){
		move(east);
	}
	else if ((txt.value === "W") || (txt.value === "w")){
		move(west);
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


var nav = [ 			  /*N   S   E   W*/
					/*0*/ [  1, -1,  10,  6],       //allows you to program one way passages into your game now!!! WINN
					/*1*/ [  2,  0,  -1, -1],
					/*2*/ [  3,  0,  -1, -1],
					/*3*/ [  4,  0,  -1, -1],
					/*4*/ [ -1,  0,  -1,  5],
					/*5*/ [ -1, -1,   4, -1],
					/*6*/ [ -1, -1,   0,  7],
					/*7*/ [ -1, -1,   0,  8],
					/*8*/ [ -1,  9,   0, -1],
					/*9*/ [  8, -1,  -1, -1],
					/*10*/[ 11, -1,  -1,  0],
					/*11*/[ -1, 10,  -1,  1],
					/*12*/[  1,  0,  -1, -1]			
		 ];
function displayArray(array2Display){
		for (var i = 0; i < array2Display.length; ++i){
			updateText( i + ":" + array2Display[i]);
		}
	}

function move(direction){
		moveCount = moveCount + 1;
		var newLocation = nav[area][direction];
		if (newLocation !== -1) { 
			area = newLocation;
			location_switch(); 
		} else {
			updateText("You cannot go this way");
		}
		 
	}


function location_switch() {
	switch(area) {
    	case 1		: north_button_heart_of_island(); 	break;
		case 2  	: north_path(); 					break;
		case 3		: north_mtn(); 						break;
		case 4		: north_cave(); 					break;
		case 11		: north_raft(); 					break;
		case 5		: west_gunpowder(); 				break;
		case 10		: east_button_down_beach(); 		break;
		case 0		: south_button_ocean(); 			break;
		case 9		: south_box(); 						break;
		case 6		: west_button_beach(); 				break;
		case 7		: west_door(); 						break;
		case 8		: west_room(); 						break;
		case 12		: init(); 							break;
		default:		updateText("Can't go this way. Try another direction...");
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
				
