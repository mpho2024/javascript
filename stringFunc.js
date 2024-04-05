let userName="alice";
let message= "welcome,";
from="";
text="";



function sendMsg(){
    let message ="welcome, "+userName;
    
}
sendMsg();
//always call the viariable in order to get return values
console.log(message)
function showMessage(){
    userName="bob";
    console.log(message,userName)
}
showMessage();
console.log(message,userName);
function sendMsg(from,text){
    from="anonymous";
    text="welcome to my online learnership,send 500";
    return from,text

}
console.log(sendMsg());

