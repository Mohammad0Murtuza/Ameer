alert ("Happy birthday 🎂🍰Ameer Abbas")


const deadline = new Date("November 01, 2022 10:00:00").getTime(); 

  
const x = setInterval(function() { 

  
const now = new Date().getTime(); 
const t = deadline - now; 
const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
const seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.querySelector("#day").innerHTML =days ; 
document.querySelector("#hour").innerHTML =hours; 
document.querySelector("#minute").innerHTML = minutes;  
document.querySelector("#second").innerHTML =seconds;  

if (t < 0) { 

        clearInterval(x); 

        document.querySelector("#demo").innerHTML = "Happy Birthday🍰🍧 Ameer Abbas"; 

        document.querySelector("#day").innerHTML ='0'; 

        document.querySelector("#hour").innerHTML ='0'; 

        document.querySelector("#minute").innerHTML ='0' ;  

        document.querySelector("#second").innerHTML = '0'; } 
}, 1000); 
