
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
 console.log(array);
 while (array[nextItem] != searchItem && nextItem >=0) {
	nextItem--;
 	let lastItem = array.pop();
	tempQueue.push(lastItem);
 }
 console.log(array);
 if(array[nextItem] === searchItem) {
	  array.pop();
  }
 console.log(array);
 while (tempQueue.length > 0){
	 let queueItem = tempQueue.pop();
	 array.push(queueItem);
 }
 console.log(array); 
 return array;
 
};

// Do not edit below this line
module.exports = removeFromArray;
