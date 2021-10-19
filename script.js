let stringType = `string`;
let numberType = 5;
let boolValue = true;
let nullValue = null;
let undefinedValue = undefined;

let addition = numberType + 10;
let subtraction = numberType - 10;
let multiplication = numberType * 10;
let division = numberType / 10;
let nmod10 = numberType % 10;


console.log('mod = ', nmod10);
console.log('addition = ',addition);
console.log( 'subtraction = ', subtraction);
console.log('multiplication = ', multiplication);
console.log('division = ', division);

let secondString = `concatonate`

let concat1 = stringType + ` ` + secondString;
let concat2 = `${stringType} ${secondString}`
console.log(`firstconcat = ${concat1},`, `secondconcat = ${concat2}`)

let length = 7;
let width = 5;
let area = length * width;
console.log(area);



let sideOne = 5;
let sideTwo = 6;
let sideThree = 6;
//herrons implementation 

let semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
let areaTriangle = Math.sqrt(semiPerimeter*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*(semiPerimeter-sideThree));
console.log(areaTriangle);

let radius = 7;
let areaCircle = Math.PI * radius;
console.log(areaCircle);
