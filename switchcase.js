//simple calculator using JS and switch case
const prompt= require('prompt-sync')();
let results;//variable
//accept the operator input
const operator=prompt('enter operator(either +,-,*,or/):');
//accept an opertor input
const num1= parseFloat(prompt('enter first number:'));
const num2= parseFloat(prompt('enter second number:'));

switch(operator){
    case'+':
    results=num1 +num2;
    console.log(`${num1} +${num2}=${results}`);
    
    break;

case'-':
results=num1 - num2;
console.log(`${num1} -${num2}=${results}`);

break;

case'*':
results=num1 * num2;
console.log(`${num1} * ${num2}=${results}`);

break;
case'/':
results=num1 /num2;
console.log(`${num1} / ${num2}=${results}`);

break;
}

