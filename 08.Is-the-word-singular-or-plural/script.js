/* IS THE WORD SINGULAR OR PLURAL ?
---------------------------------------- */
function isPlural(word){
	if (word.endsWith('s')){
		return "Plural"
	}else {
		return "Singular"
	};
};
console.log(isPlural("orange"));