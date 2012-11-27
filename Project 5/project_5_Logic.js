function go_keypress(e){
        // Check for the ENTER key (ASCII code 13). 
	if (e.which === 13) {
		document.getElementById("btnGo").onclick();
	}
}

function btn_go_click(){
	var playerinput = document.getElementById("txtCommand"); 
    	switch (playerinput.value){
        	case "N": move(north); break;     
          	case "n": move(north); break;     
          	case "E": move(east);  break;  
          	case "e": move(east);  break;  
          	case "S": move(south); break;  
         	case "s": move(south); break;  
         	case "W": move(west);  break;  
          	case "w": move(west);  break;  
          	//case "Take": Take();   break;
          	case "Help": game_help();   break;
          	case "Inventory": displayInventory(); break;
			case "inventory": displayInventory(); break;
			case "Take": take_item(); break;
			case "take": take_item(); break;
          	default: "Possible commands: N, S, E, W, n, s, e, w, inventory, Inventory"; break;         
          }
}
	
function game_help() {
	var message = "Possible commands: N, S, E, W, n, s, e, w, inventory, Inventory";
	updateText(message); 
}

//allows you to program one way passages into your game now!!! WINN
//This matrix removed pages and pages of switch-case..it handles which way the player can travel in the game, and is a life saver. 

var nav = [ 			  /*N   S   E   W*/
					/*0*/ [  1, -1,  10,  6],       
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
		updateText("Moves:" + moveCount); 
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

