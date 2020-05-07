/* EXTRACT CITY FACTS
------------------------------ */
let city = {
  name: "Istanbul",
  population: "8,000,000",
  continent: "Europe"
};

function cityFacts(city) {
	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}
console.log(cityFacts(city));