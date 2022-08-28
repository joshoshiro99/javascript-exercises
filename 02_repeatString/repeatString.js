const repeatString = function(string, timesToRepeat) {
 let returnString="";
 if (timesToRepeat >= 0) { 
	 for (let i = 0; i < timesToRepeat; i++){
		 returnString += string;
 	}
 	return returnString;
 }
  else if (timesToRepeat < 0) {
	 return "ERROR";
  }
}

// Do not edit below this line
module.exports = repeatString;
