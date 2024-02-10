
setInterval(()=>{
let a = new Date();
let hours = a.getHours();
let minutes = a.getMinutes();
let seconds = a.getSeconds();

let x = document.getElementById("time");
x.innerHTML = hours+":"+minutes+":"+seconds;
},)
