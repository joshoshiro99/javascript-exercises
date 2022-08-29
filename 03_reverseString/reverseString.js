//testing the javscript array immutability
//will swap the array indices first
//if after they fail then will recreate with a new string backwards

const reverseString = function(inputString) {
 let stringArray = inputString.split("");
 let returnString = [];
 for (let currentPosition = inputString.length-1; currentPosition >= 0; currentPosition--) {
	 let endingCharacter = inputString[currentPosition]; 
	 returnString.push(endingCharacter);
 }
 return returnString.join("");
};

// Do not edit below this line
module.exports = reverseString;
