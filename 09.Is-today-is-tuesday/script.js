/* IS TODAY IS TUESDAY ?
---------------------------------------- */

let today = new Date().getDay();
//console.log(today);
today === 3 ? console.log("TRUE") : console.log("FALSE");

//OR 

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day === day[3] ? console.log("TRUE") : console.log("FALSE");
console.log(day[2]);