///
// gameArray.js




var nav = [ 			  /*N   S   E   W*/
					/*0*/ [  1,  1,  10,  6],       //allows you to program one way passages into your game now!!! WINN
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
					/*11*/[ -1, 10,  -1,  1]	
		 ];
function location_switch(area) {
	switch(area) {
    	case 1		: north_button_heart_of_island(); 	break;
		case 2  	: north_path(); 					break;
		case 3		: north_mtn(); 						break;
		case 4		: north_cave(); 					break;
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
