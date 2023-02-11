//covert celsius into farenheit
/*let celsius = 100;
let temp = (9/5*celsius) + 32;
console.log(temp);
//conditional statements
if(temp>100){
    console.log("It is very cold")
}else{
    console.log("It is very hot")
}

function printInfo(){
    var name = "Javascript Programming";
    console.log(name + celsius + temp)
}

printInfo();*/

/*let username;
username = window.prompt("What is your name: ");
console.log(username);
alert("Hello " + username);
//document.getElementById("para").innerHTML="Hello I am learning JavaScript"
document.getElementById("para").append(username);*/

let username
document.getElementById("myBtn").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML=username;
    document.getElementById("myLabel").append();
}
