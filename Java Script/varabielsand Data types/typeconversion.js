let stringType="12"
console.log(stringType,typeof stringType);
let numberType=Number(stringType);
console.log(numberType,typeof numberType);

let numberType1=23;
console.log(numberType1,typeof numberType1);
let stringType1=String(numberType1);
console.log(stringType1,typeof stringType1);

//boolean
let number=12;
let numberToBoolean=Boolean(number);
console.log("Number is "+numberToBoolean);
//except 0 every number gives a true value
let str="";
let stringToBoolean=Boolean(str);
console.log("string is "+stringToBoolean);
//except null string every string is true