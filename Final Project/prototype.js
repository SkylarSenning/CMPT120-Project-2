//prototype.js 
//

// prototype from location and inventory that allows the programmer to create new instances of each prototype

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

			
	


















