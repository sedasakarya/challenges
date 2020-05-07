/* HTML DOM
---------------------------------------- */
// GET THE TEXT CONTENT
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

// CHANGE THE TEXT
h1.innerHTML = "I am not Seda anymore !";
console.log(h1.innerHTML);

// ADD CLASS AND ID 
h1.setAttribute('id', 'main-title');
h1.setAttribute('class', 'title');