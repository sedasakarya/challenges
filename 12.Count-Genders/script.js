/* COUNT GENDERS
---------------------------------------- */
let arr = [
  {
    name: "Seda",
    gender: "woman",
  },
  {
    name: "Jane",
    gender: "woman",
  },
  {
    name: "Jack",
    gender: "man",
  },
  {
    name: "John",
    gender: "man",
  },
  {
    name: "James",
    gender: "man",
  },
  {
    name: "Jacob",
    gender: "man",
  },

];

let numOfWoman = 0;
let numOfMan = 0;

arr.forEach(function(element){
  if(element.gender === "man"){
    numOfMan++;
  }else {
    numOfWoman++;
  }
});

console.log(" My list contains " + numOfWoman + " women and " + numOfMan + " men " );


/*for (let i = 0; i < arr.length; i++ ){
  console.log(arr[i].name + " " + arr[i].gender);
} */

// QUESTIONS WHY NUMBERS OF GENDERS ARE DISPLAY BEFORE THE "MY LIST CONTAINS" !!!!!!!