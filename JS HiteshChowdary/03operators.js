// Operators : Calculations using + - * / %

// var num1 = 11;
// var num2 = 5;

// console.log(num1 + num2);

// var answer = num1 > num2;
// console.log(answer);

var seliingPrice = 199;

var listingPrice = 500;

var discountPercentage = ((listingPrice - seliingPrice) / listingPrice) * 100;

console.log("Discount Percentage given is :" + discountPercentage);

displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > seliingPrice;
console.log(result);

console.log(typeof result);
