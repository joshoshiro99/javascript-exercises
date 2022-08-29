//testing the javscript array immutability
//will swap the array indices first
//if after they fail then will recreate with a new string backwards

const reverseString = function(inputString) {
 let stringArray = inputString.split("");
 for (let currentPosition = 0; i < inputString.length/2; i++) {
	 let endingCharacter = inputString-i;
	 stringArray[i]=stringArray[endingCharacter];
 }
 return stringArray.join();
};

// Do not edit below this line
module.exports = reverseString;
