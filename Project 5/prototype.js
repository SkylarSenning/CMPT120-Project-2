//prototype.js 
//
 
function game_location(_id, _location, _message) {
   this.id      		= _id;
   this.location     	= _location;
   this.message   		= _message;
   
   
	this.toString = function() {
   		var retVal = "";
   			retVal = "[game_location]"              + "\n" + 
				"ID:" 			+ this.id           + "\n" +
        		"Location:" 	+ this.location     + "\n" +
        		"Message:" 		+ this.message      + "\n" ;
   		return retVal;
   	}
}

function gameInventory( _location, _message, _item){
	this.location		= _location; 
	this.message 		= _message;
	this.item			= _item;
	
	this.toString = function() {
   		var retVal = "";
   			retVal = "[Inventory]"                 + "\n" + 
				"Location:"		+ this.location  + "\n" + 
        		"Message:" 	    + this.message   + "\n" +
        		"Item:" 		+ this.item      + "\n" ;
   		return retVal;
   	}	
}


//north_1 = new game_location(1, "Jungle", "Message");			
	


















