const sumAll = function(lowerLimit, upperLimit) {
 if (lowerLimit >= 0 && upperLimit >= 0) {
	 if (typeof lowerLimit == "number" && typeof upperLimit == "number") {
		 if ( upperLimit < lowerLimit) {
			 let temp = lowerLimit;
			 lowerLimit = upperLimit;
			 upperLimit = temp;
		 }
		 let sum = 0;
		 for(let i = lowerLimit; i <= upperLimit; i++){
			sum += i;
 		 }
 		 return sum;
	}
 }
 return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
