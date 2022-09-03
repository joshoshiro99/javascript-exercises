const leapYears = function(year) {
 let isLeapYear;	 
	
 let isDivisibleBy4 = (year % 4 == 0);
 console.log(isDivisibleBy4);
 let isDivisibleBy100 = (year % 100 == 0);
 console.log(isDivisibleBy100);
 let isDivisibleBy400 = (year % 400 == 0);
 console.log(isDivisibleBy400);
 if (isDivisibleBy4) {
	 isLeapYear = true;
	 if (isDivisibleBy100) {
		 isLeapYear = false;
		 if (isDivisibleBy400){
			 isLeapYear = true;
		 }
	 }
	 
 }
 else isLeapYear = false;
 
 return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
