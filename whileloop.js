//lets create anprogram that calculate  positive number only
//if  a user enters a negative number that number is skipped
let prompt =require('prompt-sync')();
//negative number-> loop must terminate
//nin numeric character--> skip iterstion
let sum=0;
let num=0.1;
while(num>0){
    num+=sum;
//accept input from user
    num=parseInt(prompt('enter a number:'));
    //contiune condition
    if(isNaN(num)){
        console.log('you entered  string that is not a number');
        num=0;
        continue;
    }
}
console.log(`the sum is ${sum}`);


