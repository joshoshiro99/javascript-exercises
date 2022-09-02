
const removeFromArray = function(array, ...searchItems){
 let finalArray;
 for (let i = 0; i < searchItems.length; i++){
	 finalArray = removeItemFromArray(array, searchItems[i]);
 }
 return finalArray;
};

const removeItemFromArray = function(array, searchItem) {
 let nextItem = array.length-1; 
 let tempQueue = []; 
 while (array[nextItem] != searchItem && nextItem >=0) {
	nextItem--;
 	let lastItem = array.pop();
	tempQueue.push(lastItem);
 }

 if (array.length < 1){
	 return `ERROR did not find ${searchItem}`;
 }
 else {
 	 array.pop();
	 while (tempQueue.length > 0){
		 array.push(tempQueue.shift());
	 }
	 return array;
 }
 
};

// Do not edit below this line
module.exports = removeFromArray;
