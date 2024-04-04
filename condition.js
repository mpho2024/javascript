const gpa=50;
pass_mark=50;
const exp=70;
const dist=85;
const avg=50;
const fail=49;
const dnw=0;
if(gpa==0){
    console.log("you have failed" +gpa);
}else if(gpa>=1 && gpa<=49){
    console.log("you are failed"+gpa)
}else if(gpa>=49 && gpa<=50){
    console.log("you are average"+gpa)
}else if(gpa>=50 && gpa<=70){
    console.log("you have passed with exemption"+gpa)
}else{
    console.log("you have passed with distiction"+gpa)
}
