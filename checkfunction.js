
let prompt=require("prompt-sync")();
//lets write a program that will check if users is old enough to
//acces the site
function checkAge(age){
    if(age>=18){
       return true 
    }else{
        return console.log("you don`t have permission from your parents");
    }
}
    let age=prompt("how old are you",18)
   if(checkAge(age)){
        console.log("access granted")
        showMovie();
    }else{
        console.log("access is denied");
    }

    function showMovie(){
   let d=200;//duration timer
   let i=0;//counter for countdown
   for(i=200;i>d;i--){
    console.log("access is granded");
    console.log("play a movie", i);
   }

    }
    showMovie();